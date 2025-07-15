import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Shield, Truck, Award, Globe, Users } from "lucide-react";
import  CategoryCard  from "./CategoryCard"

// Featured Categories Section
const FeaturedCategories = () => {
  const categories = [
    { name: "Traditional Textiles", count: "1,200+ items", color: "from-purple-400 to-pink-400" },
    { name: "Handcrafted Pottery", count: "800+ items", color: "from-blue-400 to-teal-400" },
    { name: "Cultural Artifacts", count: "600+ items", color: "from-green-400 to-emerald-400" },
    { name: "Traditional Jewelry", count: "900+ items", color: "from-yellow-400 to-orange-400" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Explore Our Collections</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From ancient artifacts to contemporary cultural pieces, discover treasures from every corner of the world
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};