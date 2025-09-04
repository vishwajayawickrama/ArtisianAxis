import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Award, } from "lucide-react";

// Define the product type
interface Product {
  id: string;
  name: string;
  artist: string;
  price: string | number;
  original_price?: string | number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  origin: string;
  materials: string;
  in_stock: boolean;
  collection: string;
}

interface ProductCardProps {
  product: Product;
}

// Product Card Component
const ProductCard = ({ product }: ProductCardProps) => {
  // Generate a color class based on product name or collection for visual variety
  const colorClasses = [
    "from-red-400 to-pink-400",
    "from-blue-400 to-indigo-400", 
    "from-yellow-400 to-orange-400",
    "from-green-400 to-teal-400",
    "from-purple-400 to-pink-400",
    "from-gray-400 to-slate-400"
  ];
  const colorClass = colorClasses[product.name.length % colorClasses.length];
  
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${colorClass} group-hover:scale-105 transition-transform duration-300 flex items-center justify-center`}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
          )}
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
          <p className="text-sm text-gray-600 mb-2">by {product.artist}</p>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
              <span className="text-sm text-gray-500 ml-1">({product.reviews} reviews)</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-gray-900">${product.price}</span>
              {product.original_price && parseFloat(product.original_price.toString()) > parseFloat(product.price.toString()) && (
                <span className="text-sm text-gray-500 line-through">${product.original_price}</span>
              )}
            </div>
            <Button size="sm" className="bg-orange-700 hover:bg-orange-600" disabled={!product.in_stock}>
              {product.in_stock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;