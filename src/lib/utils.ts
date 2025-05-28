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
