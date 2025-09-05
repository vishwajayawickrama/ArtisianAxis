import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";

interface HeaderProps {
  currentPage?: string;
  showSearch?: boolean;
  showCart?: boolean;
}

export default function Header({ currentPage = "", showSearch = false, showCart = false }: HeaderProps) {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="ArtisanAxis Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-900">ArtisanAxis</span>
          </a>

          {/* Right side - Navigation and Actions */}
          <div className="flex items-center space-x-8">
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="/collections" 
                className={`font-medium ${
                  currentPage === 'collections' 
                    ? 'text-artisan-rust hover:text-artisan-rust-light' 
                    : 'text-gray-700 hover:text-artisan-rust'
                }`}
              >
                Collections
              </a>
              <a 
                href="/products" 
                className={`font-medium ${
                  currentPage === 'products' 
                    ? 'text-artisan-rust hover:text-artisan-rust-light' 
                    : 'text-gray-700 hover:text-artisan-rust'
                }`}
              >
                Products
              </a>
              <a 
                href="/auctions" 
                className={`font-medium ${
                  currentPage === 'auctions' 
                    ? 'text-artisan-rust hover:text-artisan-rust-light' 
                    : 'text-gray-700 hover:text-artisan-rust'
                }`}
              >
                Auctions
              </a>
              <a 
                href="/about" 
                className={`font-medium ${
                  currentPage === 'about' 
                    ? 'text-artisan-rust hover:text-artisan-rust-light' 
                    : 'text-gray-700 hover:text-artisan-rust'
                }`}
              >
                About
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {showSearch && (
                <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <Search className="w-4 h-4 text-gray-500 mr-2" />
                  <Input
                    placeholder="Search..."
                    className="border-0 bg-transparent focus-visible:ring-0 text-sm"
                  />
                </div>
              )}
              {showCart && (
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="w-5 h-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
