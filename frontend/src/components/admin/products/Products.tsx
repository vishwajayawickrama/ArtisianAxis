import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, Package, AlertCircle, Loader2, RefreshCw, Star } from "lucide-react"
import useProducts from "@/hooks/api/admin/useProducts"
import useCollections from "@/hooks/api/admin/useCollections"
import { useDeleteProduct } from "@/hooks/api/admin/useDeleteProduct"
import DeleteConfirmation from "@/components/DeleteConfirmation"
import { useState, useMemo } from "react"

export interface Product {
  id: string,
  name: string,
  artist: string,
  price: string,
  original_price: string,
  rating: number,
  reviews: number,
  image: string,
  badge?: string,
  origin: string,
  materials: string,
  in_stock: boolean,
  collection: string
}

interface Collection {
  id: string,
  name: string,
  description: string,
  products: number,
  image: string
}

interface ProductCardsProps {
  searchTerm: string;
  onClearSearch?: () => void;
}

export default function ProductCards({ searchTerm, onClearSearch }: ProductCardsProps) {
  const { data, isLoading, isError, error, refetch } = useProducts();
  const { data: collections } = useCollections();
  const [deleteConfirmation, setDeleteConfirmation] = useState<boolean>(false);
  const [selectedProductId, setSelectedProductId] = useState<string>("");
  const [selectedProductName, setSelectedProductName] = useState<string>("");
  const [isRetrying, setIsRetrying] = useState<boolean>(false);
  const [deletingProductId, setDeletingProductId] = useState<string | null>(null);
  const deleteProduct = useDeleteProduct();

  // Helper function to get collection name from ID
  const getCollectionName = (collectionId: string) => {
    if (!collectionId) return "No Collection";
    if (!collections) return collectionId;
    const collection = collections.find((c: Collection) => c.id === collectionId);
    return collection ? collection.name : collectionId;
  };

  const filteredProducts = useMemo(() => {
    if (!data) return [];
    if (!searchTerm.trim()) {
      return data;
    }
    const lowercaseSearchTerm = searchTerm.toLowerCase().trim();
    return data.filter((product: Product) => 
      product.name.toLowerCase().includes(lowercaseSearchTerm) || 
      product.artist.toLowerCase().includes(lowercaseSearchTerm) ||
      getCollectionName(product.collection).toLowerCase().includes(lowercaseSearchTerm)
    );
  }, [data, searchTerm, collections]);

  const handleDelete = async (id: string) => {
    setDeletingProductId(id);
    try {
      const result = await deleteProduct.mutateAsync(id);
      console.log('Product Deleted:', result);
    } catch (error) {
      console.error('Failed to delete product:', error);
    } finally {
      setDeletingProductId(null);
      setDeleteConfirmation(false);
    }
  };

  const openDeleteDialog = (product: Product) => {
    setSelectedProductId(product.id);
    setSelectedProductName(product.name);
    setDeleteConfirmation(true);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="animate-pulse">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
              <div className="p-6 space-y-3">
                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                <div className="flex justify-between items-center pt-3">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Error state
  if (isError) {
    const handleRetry = async () => {
      setIsRetrying(true);
      try {
        await refetch();
      } catch (err) {
        console.error('Failed to retry:', err);
      } finally {
        setIsRetrying(false);
      }
    };

    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Products</h3>
          <p className="text-gray-600 mb-6">
            {error?.message || "We couldn't load the products. Please try again."}
          </p>
          <Button 
            onClick={handleRetry} 
            disabled={isRetrying}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isRetrying ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4 mr-2" />
            )}
            {isRetrying ? 'Retrying...' : 'Retry'}
          </Button>
        </div>
      </div>
    );
  }

  // Empty state
  if (!filteredProducts || filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {searchTerm ? "No Products Found" : "No Products Yet"}
          </h3>
          <p className="text-gray-600 mb-6">
            {searchTerm 
              ? `No products match "${searchTerm}". Try a different search term.`
              : "Start by adding your first product to the collection."
            }
          </p>
          {searchTerm && onClearSearch && (
            <Button 
              onClick={onClearSearch} 
              variant="outline"
              className="mr-2"
            >
              Clear Search
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <DeleteConfirmation 
        open={deleteConfirmation} 
        onConfirm={handleDelete} 
        onOpenChange={setDeleteConfirmation} 
        itemId={selectedProductId}
        itemName={`product "${selectedProductName}"`}
        title="Delete Product"
        description="This will permanently remove the product and all its associated data."
      />
      {/* Mapping Individual Cards */}
      {filteredProducts?.map((product: Product) => (
        <Card key={product.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            {/* Main Image */}
            <div className="aspect-video overflow-hidden rounded-t-lg relative">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              {!product.in_stock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm bg-red-600 px-3 py-1 rounded">
                    Out of Stock
                  </span>
                </div>
              )}
              {product.badge && (
                <div className="absolute top-2 left-2">
                  <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>
            {/* Other Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">{product.name}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-1">by {product.artist}</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">({product.reviews} reviews)</span>
                </div>
              </div>
              <p className="text-gray-900 font-semibold text-lg mb-2">${product.price}</p>
              {product.original_price && parseFloat(product.original_price) > parseFloat(product.price) && (
                <p className="text-gray-500 text-sm line-through mb-2">${product.original_price}</p>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Package className="h-4 w-4 mr-1" />
                  <span className="truncate">{getCollectionName(product.collection)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => openDeleteDialog(product)}
                    disabled={deletingProductId === product.id}
                  >
                    {deletingProductId === product.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
