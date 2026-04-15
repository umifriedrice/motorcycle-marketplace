"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  addNewParamsToSearchParams,
  removeParamFromSearchParams,
} from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"

const brands = [
  { id: "honda", name: "Honda" },
  { id: "yamaha", name: "Yamaha" },
  { id: "kawasaki", name: "Kawasaki" },
  { id: "suzuki", name: "Suzuki" },
  { id: "harley-davidson", name: "Harley-Davidson" },
  { id: "bmw-motorrad", name: "BMW Motorrad" },
  { id: "ducati", name: "Ducati" },
  { id: "ktm", name: "KTM" },
  { id: "triumph", name: "Triumph" },
  { id: "royal-enfield", name: "Royal Enfield" },
];

export function BrandFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const brandParams = searchParams.get("brand")!;
  const activeBrand = brandParams?.split(",") || [];

  const addBrandFilter = (brand: string) => {

    const newSearchParams = addNewParamsToSearchParams(
      searchParams,
      "brand",
      brand
    );

    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  const removeBrandFilter = (brand: string) => {

    const newSearchParams = removeParamFromSearchParams(
      searchParams,
      "brand",
      brand
    );

    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  const handleBrandCheckChange = (isCheck: boolean, brand: string) => {

    if (isCheck) {
      addBrandFilter(brand);
    } else if (!isCheck) {
      removeBrandFilter(brand);
    }
  };

  return (
    <div className="space-y-1">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
        Brand
      </p>
      {brands.map((brand) => (
        <div key={brand.id} className="flex items-center justify-between py-1">
          <div className="flex items-center gap-2">
            <Checkbox
              id={brand.id}
              checked={activeBrand.includes(brand.name)}
              onCheckedChange={(value) =>
                handleBrandCheckChange(value, brand.name)
              }
            />
            <Label htmlFor={brand.id} className="text-sm cursor-pointer">
              {brand.name}
            </Label>
          </div>
        </div>
      ))}
    </div>
  );
}

type Props = {
  onBrandCheck: (isChecked: boolean, brand: string) => void;
};
