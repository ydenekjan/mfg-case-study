import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IGetProducts, IGetProductsParams } from "@/types/types";

const getProducts = async ({
  page,
  sortBy,
  searchText,
  priceRange,
}: IGetProductsParams) => {
  const res = await axios.get<IGetProducts>(
    `http://localhost:3000/api/products?page=${page}&sortBy=${sortBy}&searchText=${searchText}&priceFrom=${priceRange[0]}&priceTo=${priceRange[1]}`,
  );

  if (res.status === 200) return res.data;

  throw new Error(res.statusText);
};

export function useGetProducts({
  page = 0,
  sortBy = "top",
  searchText = "",
  priceRange = [0, null],
}: Partial<IGetProductsParams>) {
  return useQuery<IGetProducts>({
    queryKey: ["products", page, sortBy, searchText, priceRange],
    queryFn: () => getProducts({ page, sortBy, searchText, priceRange }),
    staleTime: 1000 * 60 * 60,
  });
}
