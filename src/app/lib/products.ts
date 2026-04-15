import "server-only";
import rawProducts from "@/app/data/products.json";
import { MotorcycleProduct } from "@/app/model/products";

export async function listProducts(): Promise<MotorcycleProduct[]> {
  return rawProducts.motorcycles;
}

export async function browseProducts({ brand, priceMax, priceMin }: Filter): Promise<MotorcycleProduct[]> {
  let result: MotorcycleProduct[] = rawProducts.motorcycles;

  if (brand.length > 0) {
    result = result.filter(motorcycle => brand.includes(motorcycle.brand));
  }

  // we can rewrite this better later in the future
  if (priceMin > 0) {
    result = result.filter(motorcycle => motorcycle.price >= priceMin);
  }

  if (priceMax > 0) {
    result = result.filter(motorcycle => motorcycle.price <= priceMax);
  }

  return result;
}

type Filter = {
  brand: string[];
  priceMin: number;
  priceMax: number;
  // query: string;
  // category: string; 
}