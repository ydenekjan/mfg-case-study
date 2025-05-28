import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";

export type Sorting = "top" | "priceLow" | "priceHigh";

const sorting: Sorting[] = ["top", "priceLow", "priceHigh"];
const sortingMap = {
  top: "Top",
  priceLow: "Nejlevnější",
  priceHigh: "Nejdražší",
};

type Props = {
  sortBy: Sorting;
  setSortBy: React.Dispatch<React.SetStateAction<Sorting>>;
  isLoading: boolean;
};

const FilterBar = ({ sortBy, setSortBy, isLoading }: Props) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["products", sortBy] });
  }, [sortBy]);

  return (
    <aside className={"w-full flex max-md:flex-col gap-4 max-w-[1600px]"}>
      <div className={"flex gap-2"}>
        {sorting.map((sorting) => (
          <Button
            key={sorting}
            disabled={isLoading}
            className={"cursor-pointer"}
            onClick={() => setSortBy(sorting)}
            variant={sorting === sortBy ? "default" : "secondary"}
          >
            {sortingMap[sorting]}
          </Button>
        ))}
      </div>
      <Input placeholder={"Co hledáte? Např. Asymetrická vana..."} />
    </aside>
  );
};

export default FilterBar;
