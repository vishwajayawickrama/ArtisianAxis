import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Award, } from "lucide-react";

// Define the product type
interface Product {
  name: string;
  price: string | number;
  originalPrice?: string | number;
  rating: number;
  badge?: string;
  color: string;
  // Add other fields as needed
}

interface ProductCardProps {
  product: Product;
}

// Product Card Component
const ProductCard = ({ product }: ProductCardProps) => (
  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
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
);

export default ProductCard;