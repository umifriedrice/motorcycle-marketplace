"use client";

import { useState } from "react";
import { Slider } from "./ui/slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { modifyParamsInSearchParams } from "@/lib/utils";

export default function PriceFilter({ min, max }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const minPriceParam = searchParams.get("pmin");
  const maxPriceParam = searchParams.get("pmax");
  const [minPrice, setMinPrice] = useState(minPriceParam || min);
  const [maxPrice, setMaxPrice] = useState(maxPriceParam || max);

  const handleSliderValueChange = (values: number[]) => {
    const minValue = values[0];
    const maxValue = values[1];

    setMinPrice(minValue);
    setMaxPrice(maxValue);
  };

  const handleSliderValueComitted = (values: number[]) => {
    const minValue = values[0].toString();
    const maxValue = values[1].toString();
    const searchParamsWithMin = modifyParamsInSearchParams(
      searchParams,
      "pmin",
      minValue
    );
    const finalSearchParams = modifyParamsInSearchParams(
      searchParamsWithMin,
      "pmax",
      maxValue
    );

    router.push(`${pathname}?${finalSearchParams}`);
  };

  return (
    <div>
      <p>Price</p>
      <div>
        <Slider
          defaultValue={[min, max]}
          min={min}
          max={max}
          onValueCommit={handleSliderValueComitted}
          onValueChange={handleSliderValueChange}
        />
        <div className="flex">
          <div className="flex-[1_1_0]">{minPrice}</div>
          <div>{maxPrice}</div>
        </div>
      </div>
    </div>
  );
}

type Props = {
  min: number;
  max: number;
};
