import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import _debounce from "lodash/debounce";

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
  setDebouncedPriceRange: React.Dispatch<
    React.SetStateAction<[number, number]>
  >;
  maxPrice: number;
  isLoading: boolean;
};

const FilterBar = ({
  sortBy,
  setSortBy,
  setDebouncedPriceRange,
  setDebounceSearchText,
  maxPrice,
  isLoading,
}: Props) => {
  const handleDebounce = useMemo(
    () =>
      _debounce((value: string) => {
        setDebounceSearchText(value);
      }, 1000),
    [setDebounceSearchText],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    handleDebounce(e.target.value);
  };

  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1]);

  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current && maxPrice > 0) {
      setPriceRange([0, maxPrice]);
      hasInitialized.current = true;
    }
  }, [maxPrice]);

  return (
    <aside
      className={
        "w-full flex max-md:flex-col-reverse gap-4 max-w-[1600px] md:max-xl:flex-wrap"
      }
    >
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
        className={"max-md:order-3 md:max-xl:flex-1"}
      />
      <div
        className={
          "flex w-full items-center gap-2 max-sm:flex-wrap max-sm:justify-between"
        }
      >
        <Slider
          value={priceRange}
          onValueChange={(newValues) => setPriceRange(newValues)}
          onValueCommit={(newValues) => setDebouncedPriceRange(newValues)}
          min={0}
          max={maxPrice}
          step={10}
          className={"sm:order-2"}
        />
        <Input
          disabled={true}
          value={!hasInitialized.current ? "" : priceRange[0]}
          id="priceFrom"
          className={"max-w-24 w-full sm:order-1"}
        />

        <Input
          disabled={true}
          value={!hasInitialized.current ? "" : priceRange[1]}
          id="priceTo"
          className={"max-w-24 w-full sm:order-3"}
        />
      </div>
    </aside>
  );
};

export default FilterBar;
