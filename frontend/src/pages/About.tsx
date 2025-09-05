import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Globe, Users, Award, Shield, MapPin, ArrowRight, Quote } from "lucide-react"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"

export default function AboutPage() {
  const stats = [
    { number: "5,000+", label: "Cultural Items", icon: Award },
    { number: "500+", label: "Artisans", icon: Users },
    { number: "50+", label: "Countries", icon: Globe },
    { number: "25,000+", label: "Happy Customers", icon: Heart },
  ]

  const values = [
    {
      icon: Shield,
      title: "Authenticity First",
      description: "Every item comes with verified provenance and authentication certificates from cultural experts.",
    },
    {
      icon: Heart,
      title: "Fair Trade",
      description: "We ensure artisans receive fair compensation for their work, supporting sustainable livelihoods.",
    },
    {
      icon: Globe,
      title: "Cultural Preservation",
      description:
        "Protecting traditional crafts and techniques for future generations through documentation and support.",
    },
    {
      icon: Users,
      title: "Community Building",
      description:
        "Connecting collectors, artisans, and cultural enthusiasts in a global community of heritage lovers.",
    },
  ]

  const team = [
    {
      name: "Elena Rodriguez",
      role: "Founder & CEO",
      bio: "Cultural anthropologist with 15 years of experience in heritage preservation and fair trade.",
      img: "/placeholder.svg?height=300&width=300&text=Elena+Rodriguez",
      expertise: "Cultural Heritage, Fair Trade",
    },
    {
      name: "Dr. Amara Okafor",
      role: "Chief Cultural Officer",
      bio: "Museum curator and expert in African art authentication with a PhD in Art History.",
      img: "/placeholder.svg?height=300&width=300&text=Dr.+Amara+Okafor",
      expertise: "Authentication, African Art",
    },
    {
      name: "Hiroshi Tanaka",
      role: "Head of Artisan Relations",
      bio: "Former master craftsman who now helps connect traditional artisans with global markets.",
      img: "/placeholder.svg?height=300&width=300&text=Hiroshi+Tanaka",
      expertise: "Artisan Networks, Traditional Crafts",
    },
    {
      name: "Sarah Chen",
      role: "Director of Operations",
      bio: "Supply chain expert ensuring ethical sourcing and secure delivery of cultural treasures.",
      img: "/placeholder.svg?height=300&width=300&text=Sarah+Chen",
      expertise: "Operations, Logistics",
    },
  ]

  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "ArtisanAxis was founded with a mission to preserve cultural heritage through ethical commerce.",
    },
    {
      year: "2019",
      title: "First 100 Artisans",
      description: "Reached our first milestone of partnering with 100 traditional artisans across 15 countries.",
    },
    {
      year: "2020",
      title: "Digital Expansion",
      description: "Launched our online platform, making cultural treasures accessible to collectors worldwide.",
    },
    {
      year: "2021",
      title: "Authentication Program",
      description: "Introduced our comprehensive authentication and provenance verification system.",
    },
    {
      year: "2022",
      title: "Global Recognition",
      description: "Received UNESCO recognition for our contribution to cultural heritage preservation.",
    },
    {
      year: "2023",
      title: "Auction Platform",
      description: "Launched our auction platform for rare and exceptional cultural artifacts.",
    },
  ]

  const testimonials = [
    {
      quote:
        "ArtisanAxis has helped me discover the most beautiful traditional textiles. Each piece tells a story, and I love knowing that my purchases support the artisans directly.",
      author: "Maria Santos",
      role: "Art Collector",
      location: "Barcelona, Spain",
    },
    {
      quote:
        "As a museum curator, I appreciate their rigorous authentication process. The provenance documentation is exceptional, and the quality is museum-grade.",
      author: "Dr. James Mitchell",
      role: "Museum Curator",
      location: "London, UK",
    },
    {
      quote:
        "Working with ArtisanAxis has transformed my craft business. They've helped me reach customers who truly value traditional techniques and cultural significance.",
      author: "Fatima Al-Zahra",
      role: "Master Weaver",
      location: "Fez, Morocco",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
        <Navbar currentPage="about" className="mb-8" />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <a href="/" className="hover:text-artisan-rust">
            Home
          </a>
          <span>/</span>
          <span className="text-gray-900 font-medium">About</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-artisan-teal/10 text-artisan-rust hover:bg-artisan-teal/20">Our Story</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Preserving Culture,
                  <span className="text-artisan-rust"> Empowering Artisans</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  ArtisanAxis bridges the gap between traditional craftspeople and global collectors, ensuring that
                  cultural heritage is preserved, celebrated, and fairly compensated in the modern world.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-artisan-rust hover:bg-artisan-rust-light text-white">
                  Meet Our Artisans
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-artisan-rust text-artisan-rust hover:bg-artisan-teal/5 bg-transparent"
                >
                  Our Impact Report
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=500&width=600&text=Artisan+at+Work"
                  alt="Artisan crafting traditional pottery"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-artisan-teal/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-artisan-rust" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">UNESCO Recognized</p>
                    <p className="text-sm text-gray-600">Heritage Preservation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-artisan-rust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-artisan-rust" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that cultural heritage belongs to all humanity. Our mission is to preserve traditional crafts
              while ensuring artisans receive fair compensation for their invaluable work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-artisan-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-artisan-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a small initiative to a global platform, here's how we've grown while staying true to our mission.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-artisan-rust/20"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-full max-w-md ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Badge className="bg-artisan-rust text-white mr-3">{milestone.year}</Badge>
                          <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-artisan-rust rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team combines expertise in cultural heritage, technology, and fair trade to create meaningful
              connections between artisans and collectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto w-32 h-32">
                    <img
                      src={member.img || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-artisan-rust font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                  <Badge variant="secondary" className="text-xs">
                    {member.expertise}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our community of collectors, curators, and artisans about their ArtisanAxis experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-artisan-rust/30 mb-4" />
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-artisan-teal/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-artisan-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-r from-artisan-rust to-artisan-amber">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-amber-100 mb-12 max-w-3xl mx-auto">
              Every purchase on ArtisanAxis creates a positive impact, supporting traditional crafts, preserving
              cultural knowledge, and providing sustainable livelihoods for artisan communities.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$2.5M+</div>
                <div className="text-amber-100">Paid directly to artisans</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-amber-100">Traditional techniques preserved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25</div>
                <div className="text-amber-100">Cultural institutions partnered</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-artisan-rust hover:bg-gray-50">
                View Impact Report
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Support Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're a collector, artisan, or cultural enthusiast, there's a place for you in the ArtisanAxis
              community. Help us preserve cultural heritage for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-artisan-rust hover:bg-artisan-rust-light">
                Start Collecting
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                Become an Artisan Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
