import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Star, Grid3X3, List, MapPin } from "lucide-react"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Handwoven Berber Rug",
      artist: "Fatima Al-Zahra",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 24,
      img: "/placeholder.svg?height=300&width=300&text=Berber+Rug",
      badge: "Bestseller",
      origin: "Morocco",
      materials: "Wool, Natural Dyes",
      category: "Traditional Textiles",
      inStock: true,
    },
    {
      id: 2,
      name: "Ceramic Vase - Ming Style",
      artist: "Li Wei",
      price: 189,
      rating: 4.9,
      reviews: 18,
      img: "/placeholder.svg?height=300&width=300&text=Ming+Vase",
      badge: "Authentic",
      origin: "China",
      materials: "Ceramic, Glaze",
      category: "Ancient Pottery",
      inStock: true,
    },
    {
      id: 3,
      name: "Traditional Brass Lamp",
      artist: "Ahmed Hassan",
      price: 149,
      originalPrice: 199,
      rating: 4.7,
      reviews: 31,
      img: "/placeholder.svg?height=300&width=300&text=Brass+Lamp",
      origin: "Egypt",
      materials: "Brass, Glass",
      category: "Metalwork Masterpieces",
      inStock: true,
    },
    {
      id: 4,
      name: "Embroidered Silk Scarf",
      artist: "Maria Santos",
      price: 89,
      rating: 4.6,
      reviews: 42,
      img: "/placeholder.svg?height=300&width=300&text=Silk+Scarf",
      badge: "New",
      origin: "Mexico",
      materials: "Silk, Cotton Thread",
      category: "Embroidered Arts",
      inStock: true,
    },
    {
      id: 5,
      name: "Silver Filigree Jewelry",
      artist: "Carmen Rodriguez",
      price: 249,
      rating: 4.8,
      reviews: 15,
      img: "/placeholder.svg?height=300&width=300&text=Silver+Jewelry",
      badge: "Limited",
      origin: "Peru",
      materials: "Sterling Silver",
      category: "Cultural Jewelry",
      inStock: true,
    },
    {
      id: 6,
      name: "Wooden Carved Mask",
      artist: "Kwame Asante",
      price: 129,
      rating: 4.9,
      reviews: 27,
      img: "/placeholder.svg?height=300&width=300&text=Wooden+Mask",
      origin: "Ghana",
      materials: "Mahogany Wood",
      category: "Wooden Treasures",
      inStock: false,
    },
    {
      id: 7,
      name: "Japanese Indigo Textile",
      artist: "Hiroshi Tanaka",
      price: 179,
      rating: 4.5,
      reviews: 33,
      img: "/placeholder.svg?height=300&width=300&text=Indigo+Textile",
      origin: "Japan",
      materials: "Cotton, Indigo Dye",
      category: "Traditional Textiles",
      inStock: true,
    },
    {
      id: 8,
      name: "Ceremonial Bowl",
      artist: "Nalani Koa",
      price: 195,
      rating: 4.7,
      reviews: 19,
      img: "/placeholder.svg?height=300&width=300&text=Ceremonial+Bowl",
      badge: "Sacred",
      origin: "Hawaii",
      materials: "Koa Wood, Shell Inlay",
      category: "Ceremonial Objects",
      inStock: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navbar */}
      <Navbar currentPage="products"/>


      {/* Products Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  <Button variant="ghost" size="sm" className="text-artisan-rust">
                    Clear All
                  </Button>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-3">
                    <Slider defaultValue={[50, 500]} max={1000} step={10} className="w-full" />
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>$50</span>
                      <span>$500</span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {[
                      "Traditional Textiles",
                      "Ancient Pottery",
                      "Metalwork Masterpieces",
                      "Cultural Jewelry",
                      "Wooden Treasures",
                      "Embroidered Arts",
                    ].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <label htmlFor={category} className="text-sm text-gray-700 cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Origin */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Origin</h4>
                  <div className="space-y-2">
                    {["Morocco", "China", "Egypt", "Mexico", "Peru", "Ghana", "Japan"].map((origin) => (
                      <div key={origin} className="flex items-center space-x-2">
                        <Checkbox id={origin} />
                        <label htmlFor={origin} className="text-sm text-gray-700 cursor-pointer">
                          {origin}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Materials</h4>
                  <div className="space-y-2">
                    {["Wool", "Ceramic", "Brass", "Silver", "Wood", "Silk", "Cotton"].map((material) => (
                      <div key={material} className="flex items-center space-x-2">
                        <Checkbox id={material} />
                        <label htmlFor={material} className="text-sm text-gray-700 cursor-pointer">
                          {material}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Availability</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="in-stock" />
                      <label htmlFor="in-stock" className="text-sm text-gray-700 cursor-pointer">
                        In Stock
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="on-sale" />
                      <label htmlFor="on-sale" className="text-sm text-gray-700 cursor-pointer">
                        On Sale
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <p className="text-gray-600">Showing {products.length} products</p>
                </div>

                <div className="flex items-center space-x-4">
                  <Select>
                    <SelectTrigger className="w-48">
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

                  <div className="flex border rounded-lg">
                    <Button variant="ghost" size="icon" className="rounded-r-none bg-artisan-rust/10">
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-l-none">
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden rounded-t-lg">
                        <img
                          src={product.img || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.badge && (
                          <Badge className="absolute top-3 left-3 bg-artisan-rust text-white">{product.badge}</Badge>
                        )}
                        {!product.inStock && (
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
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                            )}
                          </div>
                          <Button
                            size="sm"
                            className="bg-artisan-rust hover:bg-artisan-rust-light"
                            disabled={!product.inStock}
                          >
                            {product.inStock ? "Add to Cart" : "Sold Out"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Footer */}
        <Footer />
    </div>
  )
}
