import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Sorting } from "@/components/core/filters/filterBar";
import { IProduct } from "@/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSortedData = (data: IProduct[], sortBy: Sorting) => {
  switch (sortBy) {
    case "top":
      return data;
    case "priceLow":
      return data.toSorted((a, b) => a.price - b.price);
    case "priceHigh":
      return data.toSorted((a, b) => b.price - a.price);
    default:
      return data;
  }
};

export const getSearchedData = (data: IProduct[], searchText: string) => {
  return data.filter(({ title, content, categories, brand }) => {
    const haystack = `${title} ${content} ${categories} ${brand}`.toLowerCase();
    return haystack.includes(searchText.toLowerCase());
  });
};

export const getPriceRangeData = (
  data: IProduct[],
  priceFrom: number,
  priceTo: number,
) => {
  return data.filter(({ price }) => priceFrom <= price && price <= priceTo);
};
