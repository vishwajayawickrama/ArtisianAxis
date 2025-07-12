import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Shield, Truck, Award, Globe, Users } from "lucide-react";

export default function HomePage() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    console.log(`Navigate to: ${href}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br rounded-lg flex items-center justify-center">
                <img src="logo.png" alt="" />
              </div>
              <span className="text-xl font-bold text-gray-900">ArtisanAxis</span>
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/collections" onClick={(e) => handleLinkClick(e, '/collections')} className="text-gray-700 hover:text-amber-600 font-medium">
                Collections
              </a>
              <a href="/artifacts" onClick={(e) => handleLinkClick(e, '/artifacts')} className="text-gray-700 hover:text-amber-600 font-medium">
                Artifacts
              </a>
              <a href="/textiles" onClick={(e) => handleLinkClick(e, '/textiles')} className="text-gray-700 hover:text-amber-600 font-medium">
                Textiles
              </a>
              <a href="/crafts" onClick={(e) => handleLinkClick(e, '/crafts')} className="text-gray-700 hover:text-amber-600 font-medium">
                Crafts
              </a>
              <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="text-gray-700 hover:text-amber-600 font-medium">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

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
                <Button size="lg" className="bg-orange-700 hover:bg-orange-600 text-white">
                  Explore Collections
                </Button>
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
                    <p className="font-semibold text-gray-900">5000+ Items</p>
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
            {[
              { name: "Traditional Textiles", count: "1,200+ items", color: "from-purple-400 to-pink-400" },
              { name: "Handcrafted Pottery", count: "800+ items", color: "from-blue-400 to-teal-400" },
              { name: "Cultural Artifacts", count: "600+ items", color: "from-green-400 to-emerald-400" },
              { name: "Traditional Jewelry", count: "900+ items", color: "from-yellow-400 to-orange-400" },
            ].map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <div className={`w-full h-full bg-gradient-to-br ${category.color} group-hover:scale-105 transition-transform duration-300 flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="w-8 h-8" />
                        </div>
                        <p className="font-semibold">{category.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            <Button variant="outline" className="hidden sm:flex bg-transparent">
              View All Products
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                name: "Handwoven Kilim Rug",
                price: "$299",
                originalPrice: "$399",
                rating: 4.8,
                badge: "Bestseller",
                color: "from-red-400 to-pink-400",
              },
              {
                name: "Ceramic Vase - Ming Style",
                price: "$189",
                rating: 4.9,
                badge: "Authentic",
                color: "from-blue-400 to-indigo-400",
              },
              {
                name: "Traditional Brass Lamp",
                price: "$149",
                originalPrice: "$199",
                rating: 4.7,
                color: "from-yellow-400 to-orange-400",
              },
              {
                name: "Embroidered Silk Scarf",
                price: "$89",
                rating: 4.6,
                badge: "New",
                color: "from-purple-400 to-pink-400",
              },
              {
                name: "Wooden Carved Mask",
                price: "$129",
                rating: 4.8,
                color: "from-green-400 to-teal-400",
              },
              {
                name: "Silver Filigree Jewelry",
                price: "$249",
                rating: 4.9,
                badge: "Limited",
                color: "from-gray-400 to-slate-400",
              },
              {
                name: "Handmade Tapestry",
                price: "$199",
                originalPrice: "$279",
                rating: 4.7,
                color: "from-emerald-400 to-teal-400",
              },
              { 
                name: "Cultural Art Print", 
                price: "$59", 
                rating: 4.5, 
                color: "from-amber-400 to-orange-400" 
              },
            ].map((product, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <div className={`w-full h-full bg-gradient-to-br ${product.color} group-hover:scale-105 transition-transform duration-300 flex items-center justify-center`}>
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                    </div>
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
                        <span className="font-bold text-gray-900">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" className="bg-orange-700 hover:bg-orange-600">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold">ArtisanAxis</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Connecting you with authentic cultural heritage goods from artisans worldwide.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Collections</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/textiles" onClick={(e) => handleLinkClick(e, '/textiles')} className="hover:text-white transition-colors">
                    Traditional Textiles
                  </a>
                </li>
                <li>
                  <a href="/pottery" onClick={(e) => handleLinkClick(e, '/pottery')} className="hover:text-white transition-colors">
                    Handcrafted Pottery
                  </a>
                </li>
                <li>
                  <a href="/artifacts" onClick={(e) => handleLinkClick(e, '/artifacts')} className="hover:text-white transition-colors">
                    Cultural Artifacts
                  </a>
                </li>
                <li>
                  <a href="/jewelry" onClick={(e) => handleLinkClick(e, '/jewelry')} className="hover:text-white transition-colors">
                    Traditional Jewelry
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/help" onClick={(e) => handleLinkClick(e, '/help')} className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/shipping" onClick={(e) => handleLinkClick(e, '/shipping')} className="hover:text-white transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="/returns" onClick={(e) => handleLinkClick(e, '/returns')} className="hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/artisans" onClick={(e) => handleLinkClick(e, '/artisans')} className="hover:text-white transition-colors">
                    Our Artisans
                  </a>
                </li>
                <li>
                  <a href="/sustainability" onClick={(e) => handleLinkClick(e, '/sustainability')} className="hover:text-white transition-colors">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="/careers" onClick={(e) => handleLinkClick(e, '/careers')} className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ArtisanAxis. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="/privacy" onClick={(e) => handleLinkClick(e, '/privacy')} className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" onClick={(e) => handleLinkClick(e, '/terms')} className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}