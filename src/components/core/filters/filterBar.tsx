import React, { useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import _ from "lodash";

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
  setDebounceSearchText: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
};

const FilterBar = ({
  sortBy,
  setSortBy,
  setDebounceSearchText,
  isLoading,
}: Props) => {
  const handleDebounceCallback = (value: string) => {
    setDebounceSearchText(value);
  };
  const handleDebounce = useCallback(
    _.debounce(handleDebounceCallback, 1000),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    handleDebounce(e.target.value);
  };

  const [searchText, setSearchText] = useState("");

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
      <Input
        disabled={isLoading}
        value={searchText}
        onChange={handleChange}
        placeholder={"Co hledáte? Např. Asymetrická vana..."}
      />
    </aside>
  );
};

export default FilterBar;
