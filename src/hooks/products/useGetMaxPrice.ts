import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetMaxPrice() {
  return useQuery<number>({
    queryKey: ["maxPrice"],
    queryFn: () =>
      axios
        .get(`${"http://localhost:3000"}/api/products/max-price`)
        .then((r) => r.data),
    staleTime: 1000 * 60 * 60,
  });
}
