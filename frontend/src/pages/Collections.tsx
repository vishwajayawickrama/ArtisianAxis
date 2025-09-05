import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Package, MapPin, ArrowRight, Heart, Eye, Loader2, AlertTriangle } from "lucide-react"
import { useCollections } from "@/hooks/api/admin/useCollections"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"

export default function CollectionsPage() {
  const { data, isLoading, isError, error } = useCollections()
  // Fallback to empty array if no data
  const collections = data || []
  const featuredCollections = collections.filter((collection: any) => collection.featured)
  const allCollections = collections

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navbar */}
      <Navbar currentPage="collections"/>

      {/* Featured Collections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="animate-spin text-artisan-rust h-10 w-10" />
              <span className="ml-4 text-artisan-rust font-semibold text-lg">Loading collections...</span>
            </div>
          ) : isError ? (
            <div className="flex flex-col items-center py-12">
              <AlertTriangle className="text-red-500 h-10 w-10 mb-2" />
              <span className="text-red-600 font-semibold text-lg">Error loading collections</span>
              <span className="text-gray-500 text-sm mt-2">{(error as any)?.message || "Please try again later."}</span>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {featuredCollections.slice(0, 4).map((collection: any) => (
                <a key={collection.id} href={`/collections/${collection.id}`}>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <img
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.name}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 bg-artisan-amber/10"
                          style={{ backgroundColor: '#FFF7ED' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-artisan-rust text-white">Featured</Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Button
                            variant="secondary"
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              // Handle wishlist functionality
                            }}
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center">
                                <Package className="w-4 h-4 mr-1" />
                                {collection.products} items
                              </span>
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {collection.region}
                              </span>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* All Collections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">All Collections</h2>
              <p className="text-gray-600">Browse our complete catalog of cultural heritage collections</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search collections..." className="pl-10 w-full sm:w-64" />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="global">Global</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                  <SelectItem value="africa">Africa</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="americas">Americas</SelectItem>
                  <SelectItem value="oceania">Oceania</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="animate-spin text-artisan-rust h-10 w-10" />
              <span className="ml-4 text-artisan-rust font-semibold text-lg">Loading collections...</span>
            </div>
          ) : isError ? (
            <div className="flex flex-col items-center py-12">
              <AlertTriangle className="text-red-500 h-10 w-10 mb-2" />
              <span className="text-red-600 font-semibold text-lg">Error loading collections</span>
              <span className="text-gray-500 text-sm mt-2">{(error as any)?.message || "Please try again later."}</span>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allCollections.map((collection: any) => (
                <a key={collection.id} href={`/collections/${collection.id}`}>
                  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                        <img
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.name}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 bg-artisan-amber/10"
                          style={{ backgroundColor: '#FFF7ED' }}
                        />
                        {collection.featured && (
                          <Badge className="absolute top-3 left-3 bg-artisan-rust text-white">Featured</Badge>
                        )}
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            // Handle wishlist functionality
                          }}
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{collection.name}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              // Handle preview functionality
                            }}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{collection.description}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {(collection.tags || []).slice(0, 2).map((tag: string, index: number) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {collection.tags && collection.tags.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{collection.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center">
                              <Package className="w-4 h-4 mr-1" />
                              {collection.products}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {collection.region || 'Global'}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{collection.artisans || 0} artisans</span>
                          <Button
                            size="sm"
                            className="bg-artisan-rust hover:bg-artisan-rust-light opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = `/collections/${collection.id}`
                            }}
                          >
                            Explore
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
