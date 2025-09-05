import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Heart, Clock, Users, Gavel, TrendingUp, Eye, Timer } from "lucide-react"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"

export default function AuctionsPage() {
  const auctions = [
    {
      id: 1,
      title: "Rare Ming Dynasty Porcelain Vase",
      artist: "Unknown Master Craftsman",
      currentBid: 2450,
      startingBid: 800,
      bidCount: 23,
      timeLeft: "2d 14h 32m",
      endDate: "2024-01-15T18:00:00Z",
      img: "/placeholder.svg?height=300&width=300&text=Ming+Vase",
      category: "Ancient Pottery",
      origin: "China",
      period: "Ming Dynasty (1368-1644)",
      status: "active",
      featured: true,
      reserve: true,
    },
    {
      id: 2,
      title: "Antique Persian Carpet",
      artist: "Master Weaver Reza Hosseini",
      currentBid: 1850,
      startingBid: 500,
      bidCount: 18,
      timeLeft: "1d 8h 15m",
      endDate: "2024-01-14T12:00:00Z",
      img: "/placeholder.svg?height=300&width=300&text=Persian+Carpet",
      category: "Traditional Textiles",
      origin: "Iran",
      period: "19th Century",
      status: "active",
      featured: false,
      reserve: false,
    },
    {
      id: 3,
      title: "Ceremonial African Mask",
      artist: "Tribal Artisan",
      currentBid: 680,
      startingBid: 200,
      bidCount: 12,
      timeLeft: "3d 22h 45m",
      endDate: "2024-01-17T20:00:00Z",
      img: "/placeholder.svg?height=300&width=300&text=African+Mask",
      category: "Ceremonial Objects",
      origin: "Mali",
      period: "Early 20th Century",
      status: "active",
      featured: true,
      reserve: true,
    },
    {
      id: 4,
      title: "Japanese Samurai Sword Guard (Tsuba)",
      artist: "Myochin School",
      currentBid: 1200,
      startingBid: 400,
      bidCount: 15,
      timeLeft: "5d 6h 20m",
      endDate: "2024-01-19T14:00:00Z",
      img: "/placeholder.svg?height=300&width=300&text=Tsuba",
      category: "Metalwork Masterpieces",
      origin: "Japan",
      period: "Edo Period (1603-1868)",
      status: "active",
      featured: false,
      reserve: true,
    },
    {
      id: 5,
      title: "Pre-Columbian Gold Figurine",
      artist: "Ancient Muisca Artisan",
      currentBid: 3200,
      startingBid: 1500,
      bidCount: 8,
      timeLeft: "6d 12h 30m",
      endDate: "2024-01-20T16:00:00Z",
      img: "/placeholder.svg?height=300&width=300&text=Gold+Figurine",
      category: "Cultural Artifacts",
      origin: "Colombia",
      period: "600-1600 CE",
      status: "active",
      featured: true,
      reserve: true,
    },
    {
      id: 6,
      title: "Victorian Era Cameo Brooch",
      artist: "European Master Carver",
      currentBid: 420,
      startingBid: 150,
      bidCount: 9,
      timeLeft: "4d 18h 10m",
      endDate: "2024-01-18T22:00:00Z",
      img: "/placeholder.svg?height=300&width=300&text=Cameo+Brooch",
      category: "Cultural Jewelry",
      origin: "England",
      period: "Victorian Era (1837-1901)",
      status: "active",
      featured: false,
      reserve: false,
    },
  ]

  const featuredAuctions = auctions.filter((auction) => auction.featured)

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar currentPage="auctions"/>

      {/* Featured Auctions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Auctions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAuctions.map((auction) => (
              <Card key={auction.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={auction.img || "/placeholder.svg"}
                      alt={auction.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-artisan-rust text-white">Featured</Badge>
                    </div>
                    {auction.reserve && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-artisan-amber text-white">Reserve</Badge>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="flex items-center">
                            <Timer className="w-4 h-4 mr-1" />
                            {auction.timeLeft}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {auction.bidCount} bids
                          </span>
                        </div>
                        <div className="text-lg font-bold">${auction.currentBid.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{auction.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{auction.artist}</p>
                    <div className="text-xs text-gray-500 mb-4">
                      <div>
                        {auction.origin} • {auction.period}
                      </div>
                      <div>{auction.category}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500">Starting bid</div>
                        <div className="text-sm font-medium">${auction.startingBid}</div>
                      </div>
                      <Button className="bg-artisan-rust hover:bg-artisan-rust-light">
                        <Gavel className="w-4 h-4 mr-2" />
                        Bid Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Auctions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">All Auctions</h2>
              <p className="text-gray-600">Browse all active auctions and place your bids</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search auctions..." className="pl-10 w-full sm:w-64" />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ending-soon">Ending Soon</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-high">Highest Bid</SelectItem>
                  <SelectItem value="price-low">Lowest Bid</SelectItem>
                  <SelectItem value="most-bids">Most Bids</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {auctions.map((auction) => (
              <Card key={auction.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={auction.img || "/placeholder.svg"}
                      alt={auction.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {auction.featured && (
                      <Badge className="absolute top-3 left-3 bg-artisan-rust text-white">Featured</Badge>
                    )}
                    {auction.reserve && (
                      <Badge className="absolute top-3 right-3 bg-artisan-amber text-white text-xs">Reserve</Badge>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">{auction.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{auction.artist}</p>

                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500">Current Bid</span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {auction.bidCount}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-gray-900 mb-2">${auction.currentBid.toLocaleString()}</div>
                      <div className="flex items-center text-xs text-gray-600">
                        <Clock className="w-3 h-3 mr-1" />
                        {auction.timeLeft} left
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 mb-3">
                      <div>
                        {auction.origin} • {auction.period}
                      </div>
                    </div>

                    <Button className="w-full bg-artisan-rust hover:bg-artisan-rust-light" size="sm">
                      <Gavel className="w-4 h-4 mr-2" />
                      Place Bid
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How Auctions Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, secure, and transparent bidding process for cultural heritage items
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-artisan-rust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-artisan-rust" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse & Research</h3>
              <p className="text-gray-600">
                Explore our curated auctions with detailed provenance, condition reports, and expert authentication.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-artisan-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gavel className="w-8 h-8 text-artisan-teal" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Place Your Bid</h3>
              <p className="text-gray-600">
                Register and place bids with confidence. Our platform ensures secure transactions and fair bidding.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-artisan-amber/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-artisan-amber" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Win & Collect</h3>
              <p className="text-gray-600">
                Successful bidders receive authentication certificates and secure worldwide shipping options.
              </p>
            </div>
          </div>
        </div>
      </section>
      { /* Footer */
      <Footer />}
    </div>
  )
}
