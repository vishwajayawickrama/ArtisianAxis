import { Button } from "@/components/ui/button";

// Featured Products Section
const FeaturedProducts = () => {
  // const products = [
  //   {
  //     name: "Handwoven Kilim Rug",
  //     price: "$299",
  //     originalPrice: "$399",
  //     rating: 4.8,
  //     badge: "Bestseller",
  //     color: "from-red-400 to-pink-400",
  //   },
  //   {
  //     name: "Ceramic Vase - Ming Style",
  //     price: "$189",
  //     rating: 4.9,
  //     badge: "Authentic",
  //     color: "from-blue-400 to-indigo-400",
  //   },
  //   {
  //     name: "Traditional Brass Lamp",
  //     price: "$149",
  //     originalPrice: "$199",
  //     rating: 4.7,
  //     color: "from-yellow-400 to-orange-400",
  //   },
  //   {
  //     name: "Embroidered Silk Scarf",
  //     price: "$89",
  //     rating: 4.6,
  //     badge: "New",
  //     color: "from-purple-400 to-pink-400",
  //   },
  //   {
  //     name: "Wooden Carved Mask",
  //     price: "$129",
  //     rating: 4.8,
  //     color: "from-green-400 to-teal-400",
  //   },
  //   {
  //     name: "Silver Filigree Jewelry",
  //     price: "$249",
  //     rating: 4.9,
  //     badge: "Limited",
  //     color: "from-gray-400 to-slate-400",
  //   },
  //   {
  //     name: "Handmade Tapestry",
  //     price: "$199",
  //     originalPrice: "$279",
  //     rating: 4.7,
  //     color: "from-emerald-400 to-teal-400",
  //   },
  //   { 
  //     name: "Cultural Art Print", 
  //     price: "$59", 
  //     rating: 4.5, 
  //     color: "from-amber-400 to-orange-400" 
  //   },
  // ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Heritage Items</h2>
            <p className="text-xl text-gray-600">Handpicked treasures from our curated collection</p>
          </div>
          <Button variant="outline" className="hidden sm:flex bg-transparent">
            View All Products
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;