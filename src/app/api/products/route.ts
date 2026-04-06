import { listProducts } from "@/app/lib/products";

export async function GET() {
  const products = await listProducts();
  return Response.json(products);
}
