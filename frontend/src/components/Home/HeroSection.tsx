import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Shield, Truck, Award, Globe, Users } from "lucide-react";

// Hero Section Component
const HeroSection = () => (
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
);