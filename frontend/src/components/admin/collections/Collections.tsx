import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit, Trash2, Eye, Package } from "lucide-react"
import useCollections from "@/hooks/api/admin/useCollections"
import { useDeleteCollection } from "@/hooks/api/admin/useDeleteCollection"
import DeleteConfirmation from "@/components/DeleteConfirmation"
import { useState } from "react"

export interface Collection {
  id: string,
  name: string,
  description: string,
  products: number,
  image: string
}

export default function CollectionCards() {
  const { data, isLoading, isError, error } = useCollections();
  const [deleteConfirmation, setDeleteConfirmation] = useState<boolean>(false);
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>("");
  const [selectedCollectionName, setSelectedCollectionName] = useState<string>("");
  const deleteCollection = useDeleteCollection();

  if (isLoading) return <p>Loading collections...</p>;
  if (isError) return <p>Error: {(error as any).message}</p>;
  
  console.log(data);

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteCollection.mutateAsync(id);
      console.log('Collection Deleted successfully:', result);
    } catch (error: any) {
      console.error('Failed to Delete collection:', error);
    }
  };

  const openDeleteDialog = (collection: Collection) => {
    setSelectedCollectionId(collection.id);
    setSelectedCollectionName(collection.name);
    setDeleteConfirmation(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DeleteConfirmation 
        open={deleteConfirmation} 
        onConfirm={handleDelete} 
        onOpenChange={setDeleteConfirmation} 
        itemId={selectedCollectionId}
        itemName={`collection "${selectedCollectionName}"`}
        title="Delete Collection"
        description="This will permanently remove the collection and all its associated data."
      />

      {/* Mapping Individual Cards */}
      {data?.map((collection: Collection) => (
        <Card key={collection.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            {/* Main Image */}
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img
                src={collection.image || "/placeholder.svg"}
                alt={collection.name}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Other Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg text-gray-900">{collection.name}</h3>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{collection.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Package className="h-4 w-4 mr-1" />
                  {collection.products} products
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => openDeleteDialog(collection)}
                  >
                    <Trash2 className="h-4 w-4" />
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