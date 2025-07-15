import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Shield, Truck, Award, Globe, Users } from "lucide-react";

// Category Card Component
const CategoryCard = ({ category, index }) => (
  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
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
);

export default CategoryCard;