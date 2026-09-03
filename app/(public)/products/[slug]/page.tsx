import {
  getProductBySlug,
  getProducts,
} from "@/services/product.services";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/product/ProductDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  // 👉 Get all products
  const products = await getProducts();

  // 👉 Filter related products (exclude current one)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <ProductDetails
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}