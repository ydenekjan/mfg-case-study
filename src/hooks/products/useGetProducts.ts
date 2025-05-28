import { IProduct } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Sorting } from "@/components/core/filters/filterBar";

interface IGetProducts {
  data: IProduct[];
  nextPage: number;
}

interface IGetProductsParams {
  page: number;
  sortBy: Sorting;
  searchText: string;
}

const getProducts = async ({
  page,
  sortBy,
  searchText,
}: IGetProductsParams) => {
  const res = await axios.get<IGetProducts>(
    `http://localhost:3000/api/products?page=${page}&sortBy=${sortBy}&searchText=${searchText}`,
  );

  if (res.status === 200) return res.data;

  throw new Error(res.statusText);
};

export function useGetProducts({
  page = 0,
  sortBy = "top",
  searchText = "",
}: Partial<IGetProductsParams>) {
  return useQuery<IGetProducts>({
    queryKey: ["products", page, sortBy, searchText],
    queryFn: () => getProducts({ page, sortBy, searchText }),
    placeholderData: { data: new Array(20).fill({}), nextPage: 1 },
    //auto refetch after 60 minutes
    staleTime: 1000 * 60 * 60,
  });
}
