import { browseProducts, listProducts } from "@/app/lib/products";
import ProductCard from "../../components/product-card";
import { BrandFilter } from "@/components/brand-filter";
import { AppRouterPageProps } from "../types/types";
import PriceFilter from "@/components/price-filter";

// we can move this default to querying from data sources later
const DEFAULT_MIN_PRICE = 5000;
const DEFAULT_MAX_PRICE = 30000;

export default async function BrowsePage({
  searchParams,
}: AppRouterPageProps<
  Promise<{}>,
  Promise<{ brand: string; pmin: string; pmax: string; [key: string]: string | string[] | undefined }>
>) {
  const pageSearchParams = await searchParams;
  const brandParams = pageSearchParams.brand?.split(",") || [];
  const minPriceParam = parseInt(pageSearchParams.pmin, 10) || 0;
  const maxPriceParam = parseInt(pageSearchParams.pmax, 10) || 0;
  const products = await browseProducts({ brand: brandParams, priceMax: maxPriceParam, priceMin: minPriceParam  });

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
        <div className="flex">
          <div className="flex flex-col mr-4 w-96">
            <div className="">
              <BrandFilter />
            </div>
            <div className="">
              <PriceFilter min={DEFAULT_MIN_PRICE} max={DEFAULT_MAX_PRICE} />
            </div>
            <div className="">
              <span>TYPE</span>
            </div>
          </div>
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
                    engineCc={product.engine_cc}
                    horsepower={product.horsepower}
                    price={product.price}
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
