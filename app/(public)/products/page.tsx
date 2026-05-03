

import ProductList from "@/components/product/ProductList";
import { getProducts } from "@/services/product.services";
export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="bg-pink-50 min-h-screen">

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Handmade Collection ✨
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto">
            Discover unique handcrafted items made with love
          </p>
        </div>

        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            {products.length} products found
          </p>
        </div>

        {/* List */}
        <ProductList products={products} />

      </div>
    </div>
  );
}