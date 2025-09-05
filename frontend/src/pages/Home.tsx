import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Shield, Award, Globe, Users, Loader2, AlertTriangle } from "lucide-react";
import { useCollections } from "@/hooks/api/admin/useCollections";
import useProducts from "@/hooks/api/admin/useProducts";
import type { Collection } from "@/components/admin/collections/Collections";
import type { Product } from "@/components/admin/products/Products";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function HomePage() {
  const { data: collections, isLoading: collectionsLoading, isError: collectionsError } = useCollections();
  const { data: products, isLoading: productsLoading, isError: productsError } = useProducts();

  // Get featured collections (first 4 for categories section)
  const featuredCollections = collections?.slice(0, 4) || [];
  
  // Get featured products (first 8 for products section)
  const featuredProducts = products?.slice(0, 8) || [];

  // Calculate total items for stats
  const totalItems = products?.length || 0;


  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navbar */}
      <Navbar currentPage="home"/>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-teal-50 text-orange-700 hover:bg-teal-100 border-teal-200">
                  Authentic Cultural Heritage
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Connect with Artisans
                  <span className="text-orange-700"> Worldwide</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover authentic cultural artifacts, traditional crafts, and heritage goods directly from skilled
                  artisans around the world. Each piece tells a story of tradition and craftsmanship.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/collections">
                  <Button size="lg" className="bg-orange-700 hover:bg-orange-600 text-white">
                    Explore Collections
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-700 text-orange-700 hover:bg-teal-50 bg-transparent"
                >
                  Meet Our Artisans
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-orange-700" />
                  <span>Authenticity Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-orange-700" />
                  <span>Global Artisans</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                    <img src="hero-image.jpeg" alt="" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{totalItems}+ Items</p>
                    <p className="text-sm text-gray-600">Curated Collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Explore Our Collections</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From ancient artifacts to contemporary cultural pieces, discover treasures from every corner of the world
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collectionsLoading ? (
              // Loading state
              <div className="col-span-full flex justify-center items-center py-12">
                <Loader2 className="animate-spin text-orange-700 h-10 w-10" />
                <span className="ml-4 text-orange-700 font-semibold text-lg">Loading collections...</span>
              </div>
            ) : collectionsError ? (
              // Error state
              <div className="col-span-full flex flex-col items-center py-12">
                <AlertTriangle className="text-red-500 h-10 w-10 mb-2" />
                <span className="text-red-600 font-semibold text-lg">Error loading collections</span>
                <span className="text-gray-500 text-sm mt-2">Please try again later.</span>
              </div>
            ) : (
              featuredCollections.map((collection: Collection) => (
                <a key={collection.id} href={`/collections/${collection.id}`}>
                  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden rounded-t-lg">
                        <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={collection.image || "/placeholder.svg"}
                            alt={collection.name}
                            className="w-full h-full object-cover"
                            style={{ backgroundColor: '#FFF7ED' }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8" />
                              </div>
                              <p className="font-semibold">{collection.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{collection.name}</h3>
                        <p className="text-sm text-gray-600">{collection.products || 0}+ items</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Heritage Items</h2>
              <p className="text-xl text-gray-600">Handpicked treasures from our curated collection</p>
            </div>
            <a href="/collections">
              <Button variant="outline" className="hidden sm:flex bg-transparent">
                View All Products
              </Button>
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsLoading ? (
              // Loading state
              <div className="col-span-full flex justify-center items-center py-12">
                <Loader2 className="animate-spin text-orange-700 h-10 w-10" />
                <span className="ml-4 text-orange-700 font-semibold text-lg">Loading products...</span>
              </div>
            ) : productsError ? (
              // Error state
              <div className="col-span-full flex flex-col items-center py-12">
                <AlertTriangle className="text-red-500 h-10 w-10 mb-2" />
                <span className="text-red-600 font-semibold text-lg">Error loading products</span>
                <span className="text-gray-500 text-sm mt-2">Please try again later.</span>
              </div>
            ) : (
              featuredProducts.map((product: Product) => (
                <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundColor: '#FFF7ED' }}
                      />
                      {product.badge && (
                        <Badge className="absolute top-3 left-3 bg-orange-700 text-white">{product.badge}</Badge>
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
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-gray-900">${product.price}</span>
                          {product.original_price && (
                            <span className="text-sm text-gray-500 line-through">${product.original_price}</span>
                          )}
                        </div>
                        <Button size="sm" className="bg-orange-700 hover:bg-orange-600">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="bg-teal-50 text-orange-700 mb-4 border-teal-200">Our Mission</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Preserving Cultural Heritage for Future Generations
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We partner directly with artisans and cultural institutions worldwide to bring you authentic heritage
                  goods while supporting traditional craftsmanship and preserving cultural knowledge.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Direct Artisan Support</h3>
                    <p className="text-sm text-gray-600">Fair trade partnerships with traditional craftspeople</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Authenticity Verified</h3>
                    <p className="text-sm text-gray-600">Every item comes with provenance documentation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Global Reach</h3>
                    <p className="text-sm text-gray-600">Connecting cultures across 50+ countries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Assured</h3>
                    <p className="text-sm text-gray-600">Rigorous quality standards and expert curation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-16 h-16 text-orange-700" />
                    </div>
                    <p className="text-orange-800 font-semibold text-lg">Master Artisans</p>
                    <p className="text-orange-600">Creating Heritage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-orange-700 to-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Stay Connected to Heritage</h2>
            <p className="text-xl text-amber-100 mb-8">
              Get exclusive access to new collections, artisan stories, and cultural insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-amber-100 focus-visible:ring-white/30"
              />
              <Button className="bg-white text-orange-700 hover:bg-gray-50 font-semibold">Subscribe</Button>
            </div>
            <p className="text-sm text-amber-100 mt-4">Join 25,000+ heritage enthusiasts. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}