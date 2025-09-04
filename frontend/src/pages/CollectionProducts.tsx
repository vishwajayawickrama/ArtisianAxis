import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useParams } from "react-router-dom"
import { useCollection, useCollectionProducts } from "@/hooks/api/admin/useCollections"
import type { Product } from "@/components/admin/products/Products"
import { Search, Heart, Star, ShoppingCart, Grid3X3, List, SlidersHorizontal, MapPin, Package, Users, ArrowLeft, Share2, Loader2, AlertCircle, } from "lucide-react"

export default function CollectionPage() {
  const params = useParams<{ id: string }>()
  const { data: collection, isLoading: collectionLoading, isError: collectionError } = useCollection(params.id)
  const { data: collectionProducts, isLoading: productsLoading, isError: productsError } = useCollectionProducts(params.id)
  

  // Loading state
  if (collectionLoading || productsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-artisan-rust" />
          <p className="text-gray-600">Loading collection...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (collectionError || productsError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-500" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Collection</h1>
          <a href="/collections">
            <Button>Back to Collections</Button>
          </a>
        </div>
      </div>
    )
  }

  // Collection not found
  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Collection Not Found</h1>
          <a href="/collections">
            <Button>Back to Collections</Button>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header - Same as other pages */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="ArtisanAxis Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold text-gray-900">ArtisanAxis</span>
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="/collections" className="text-artisan-rust hover:text-artisan-rust-light font-medium">
                Collections
              </a>
              <a href="/artifacts" className="text-gray-700 hover:text-artisan-rust font-medium">
                Artifacts
              </a>
              <a href="/textiles" className="text-gray-700 hover:text-artisan-rust font-medium">
                Textiles
              </a>
              <a href="/crafts" className="text-gray-700 hover:text-artisan-rust font-medium">
                Crafts
              </a>
              <a href="/about" className="text-gray-700 hover:text-artisan-rust font-medium">
                About
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <a href="/" className="hover:text-artisan-rust">
            Home
          </a>
          <span>/</span>
          <a href="/collections" className="hover:text-artisan-rust">
            Collections
          </a>
          <span>/</span>
          <span className="text-gray-900 font-medium">{collection.name}</span>
        </nav>
      </div>

      {/* Collection Hero */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <a href="/collections">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </a>
                <Badge className="bg-artisan-teal/10 text-artisan-rust">Collection</Badge>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">{collection.name}</h1>
                <p className="text-xl text-gray-600 leading-relaxed">{collection.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-artisan-rust/10 rounded-full mb-2 mx-auto">
                    <Package className="w-6 h-6 text-artisan-rust" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{collection.products || collectionProducts.length}</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-artisan-teal/10 rounded-full mb-2 mx-auto">
                    <Users className="w-6 h-6 text-artisan-teal" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{collectionProducts.length}</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button className="bg-artisan-rust hover:bg-artisan-rust-light">
                  <Heart className="w-4 h-4 mr-2" />
                  Save Collection
                </Button>
                <Button variant="outline" className="bg-transparent">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filters and Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Products in this Collection</h2>
              <p className="text-gray-600">Showing {collectionProducts.length} authentic items</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search products..." className="pl-10 w-full sm:w-64" />
              </div>

              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="bg-transparent">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>

              <div className="flex border rounded-lg">
                <Button variant="ghost" size="icon" className="rounded-r-none">
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-l-none">
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collectionProducts.map((product: Product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-artisan-rust text-white">{product.badge}</Badge>
                    )}
                    {!product.in_stock && (
                      <Badge className="absolute top-3 left-3 bg-gray-500 text-white">Out of Stock</Badge>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <div className="mb-2">
                      <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-600">by {product.artist}</p>
                    </div>

                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 mb-3">
                      <div className="flex items-center mb-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {product.origin}
                      </div>
                      <div>{product.materials}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-900">${product.price}</span>
                        {product.original_price && (
                          <span className="text-sm text-gray-500 line-through">${product.original_price}</span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        className="bg-artisan-rust hover:bg-artisan-rust-light"
                        disabled={!product.in_stock}
                      >
                        {product.in_stock ? "Add to Cart" : "Sold Out"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="bg-transparent">
              Load More Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
