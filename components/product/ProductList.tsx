import ProductCard from "./ProductCard";
import { Product } from "@/types/product.types";
import { PackageOpen } from "lucide-react";

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  if (!products.length) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-pink-200 bg-white p-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 text-pink-500">
          <PackageOpen size={30} />
        </div>

        <h3 className="text-lg font-bold text-gray-800">
          No products found
        </h3>

        <p className="mt-2 max-w-sm text-sm text-gray-500">
          We couldn't find any products at the moment. Please check back
          later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;