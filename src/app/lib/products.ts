import "server-only";
import rawProducts from "@/app/data/products.json";
import { MotorcycleProduct } from "@/app/model/products";

export async function listProducts(): Promise<MotorcycleProduct[]> {
  return rawProducts.motorcycles;
}
