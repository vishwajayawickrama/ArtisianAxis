import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentPage?: string;
  className?: string;
}

export default function Navbar({
  currentPage = "",
  className = ""
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "/collections", label: "Collections", page: "collections" },
    { href: "/products", label: "Products", page: "products" },
    { href: "/auctions", label: "Auctions", page: "auctions" },
    { href: "/about", label: "About", page: "about" },
  ];

  return (
    <header className={`border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="ArtisanAxis Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10" 
            />
            <span className="text-xl font-bold text-gray-900">ArtisanAxis</span>
          </a>
          
          {/* Desktop Navigation - Right Aligned */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.page}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    currentPage === item.page
                      ? 'text-artisan-rust hover:text-artisan-rust-light'
                      : 'text-gray-700 hover:text-artisan-rust'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.page}
                href={item.href}
                className={`block px-4 py-2 font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-artisan-rust bg-artisan-rust/10'
                    : 'text-gray-700 hover:text-artisan-rust hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}