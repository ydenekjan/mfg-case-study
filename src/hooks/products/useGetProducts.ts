import { IProduct } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface IGetProducts {
  data: IProduct[];
  nextPage: number;
}

const getProducts = async ({ page }: { page: number }) => {
  const res = await axios.get<IGetProducts>(
    `http://localhost:3000/api/products?page=${page}`,
  );

  if (res.status === 200) return res.data;

  throw new Error(res.statusText);
};

export function useGetProducts({
  page = 0,
}: {
  page?: number;
  pageSize?: number;
}) {
  return useQuery<IGetProducts>({
    queryKey: ["products", page],
    queryFn: () => getProducts({ page }),
    placeholderData: { data: new Array(20).fill({}), nextPage: 1 },
  });
}
