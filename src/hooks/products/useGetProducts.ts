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
}
const getProducts = async ({ page, sortBy }: IGetProductsParams) => {
  const res = await axios.get<IGetProducts>(
    `http://localhost:3000/api/products?page=${page}&sortBy=${sortBy}`,
  );

  if (res.status === 200) return res.data;

  throw new Error(res.statusText);
};

export function useGetProducts({
  page = 0,
  sortBy = "top",
}: {
  page?: number;
  pageSize?: number;
  sortBy?: Sorting;
}) {
  return useQuery<IGetProducts>({
    queryKey: ["products", page, sortBy],
    queryFn: () => getProducts({ page, sortBy }),
    placeholderData: { data: new Array(20).fill({}), nextPage: 1 },
  });
}
