import  CategoryCard  from "./CategoryCard"

// Featured Categories Section
const FeaturedCategories = () => {
  const categories = [
    { name: "Traditional Textiles", count: 1200, color: "from-purple-400 to-pink-400" },
    { name: "Handcrafted Pottery", count: 800, color: "from-blue-400 to-teal-400" },
    { name: "Cultural Artifacts", count: 600, color: "from-green-400 to-emerald-400" },
    { name: "Traditional Jewelry", count: 900, color: "from-yellow-400 to-orange-400" },
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
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;