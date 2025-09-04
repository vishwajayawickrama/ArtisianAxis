import ProductCards from "@/components/admin/products/Products";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import NewProductDialog from "@/components/admin/products/NewProductDialog";

export default function AdminProducts() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-64"
          />
          <NewProductDialog />
        </div>
      </div>
      <ProductCards searchTerm={searchTerm} />
    </div>
  );
}
