import { products } from "@/data/products";
import { Product } from "@/types/product.types";

export const getProducts = async (): Promise<Product[]> => {
  return products;
};

export const getProductBySlug = async (
  slug: string
): Promise<Product | undefined> => {
  return products.find((p) => p.slug === slug);
};