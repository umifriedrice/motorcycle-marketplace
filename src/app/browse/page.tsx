import { listProducts } from "@/app/lib/products";
import ProductCard from "../components/product-card";

export default async function BrowsePage() {
  const products = await listProducts();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <h1>Browse Page</h1>
      </div>
      <div className="flex flex-col gap-2">
        <span>Products ({products.length})</span>
        <div className="flex flex-wrap">
          {products.map((product, index) => (
            <ProductCard
              key={`${product.id}-${index}`}
              image={product.model_image_url}
              model={product.model_name}
              brandLogo={product.brand_logo_url}
              brand={product.brand}
              year={product.year}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
