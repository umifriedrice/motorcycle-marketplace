import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export function addNewParamsToSearchParams(
  searchParams: URLSearchParams,
  key: string,
  value: string
) {
  const newSearchParams = new URLSearchParams(searchParams.toString());

  const currentParams = newSearchParams.get(key);

  if (currentParams) {
    const paramArr = currentParams.split(",");
    const newParamValue = [...paramArr, value];
    newSearchParams.set(key, newParamValue.join(","));
  } else if (!currentParams) {
    newSearchParams.set(key, value);
  }

  return newSearchParams;
}

export function modifyParamsInSearchParams(
  searchParams: URLSearchParams,
  key: string,
  value: string
) {
  const newSearchParams = new URLSearchParams(searchParams.toString());

  newSearchParams.set(key, value);

  return newSearchParams;
}

export function removeParamFromSearchParams(
  searchParams: URLSearchParams,
  key: string,
  value: string
) {
  const newSearchParams = new URLSearchParams(searchParams.toString());

  const currentParams = newSearchParams.get(key);
  const paramArr = currentParams?.split(",") || [];
  const newParamValue = paramArr.filter((param) => param !== value);

  if (newParamValue.length > 0) {
    newSearchParams.set(key, newParamValue.join(","));
  } else if (newParamValue.length === 0) {
    newSearchParams.delete(key);
  }

  return newSearchParams;
}
