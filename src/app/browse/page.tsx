import { listProducts } from "@/app/lib/products";
import ProductCard from "../../components/product-card";

export default async function BrowsePage() {
  const products = await listProducts();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <h1>Header</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="flex-1">Search box</div>
          <div>Sort</div>
        </div>
        <div className="flex flex-row">
          <div>Filter Here</div>
          <div>
            <span>Showing ({products.length}) motorcyles</span>
            <div className="flex flex-wrap ">
              {products.map((product, index) => (
                <div key={`${product.id}-${index}`} className="w-40 mr-4 mb-4">
                  <ProductCard
                    image={product.model_image_url}
                    model={product.model_name}
                    brandLogo={product.brand_logo_url}
                    brand={product.brand}
                    year={product.year}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
