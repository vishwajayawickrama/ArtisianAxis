import { Shield, Truck } from "lucide-react"

export default function Footer() {
    return (
        <>
       {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="ArtisanAxis Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 bg-white rounded-lg p-1"
                />
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
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/collections" className="hover:text-white transition-colors">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-white transition-colors">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="/auctions" className="hover:text-white transition-colors">
                    Auctions
                  </a>
                </li>
                <li>
                  <a href="/artists" className="hover:text-white transition-colors">
                    Featured Artists
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="hover:text-white transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="/returns" className="hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/artisans" className="hover:text-white transition-colors">
                    Our Artisans
                  </a>
                </li>
                <li>
                  <a href="/sustainability" className="hover:text-white transition-colors">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} ArtisanAxis. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
      </>
    );
    }