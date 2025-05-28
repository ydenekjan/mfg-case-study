"use client";
import { useEffect, useState } from "react";
import { useGetMaxPrice } from "@/hooks/products/useGetMaxPrice";
import { useGetProducts } from "@/hooks/products/useGetProducts";
import ProductCard from "@/components/core/product/productCard";
import FilterBar, { Sorting } from "@/components/core/filters/filterBar";
import Pagination from "@/components/core/navigation/pagination";

const ProductsContainer = () => {
  const [page, setPage] = useState(0);
  const [sortBy, setSortBy] = useState<Sorting>("top");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [debouncedPriceRange, setDebouncedPriceRange] = useState<
    [number, number]
  >([0, 0]);

  const { data: maxPrice = 0, isLoading: loadingPrice } = useGetMaxPrice();

  const {
    data: productsData,
    isLoading: loadingProducts,
    isError,
    isFetching: fetchingProducts,
  } = useGetProducts({
    page,
    sortBy,
    searchText: debouncedSearchText,
    priceRange: debouncedPriceRange,
  });

  //scroll to top when new page is fetched
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  //go back to the first page on sorting or search change
  useEffect(() => {
    setPage(0);
  }, [sortBy, debouncedSearchText, debouncedPriceRange]);

  if (isError)
    return (
      <main
        className={
          "w-full flex flex-col items-center p-8 py-12 gap-8 text-xl flex-1"
        }
      >
        Nepodařilo se načíst produkty.
      </main>
    );

  const isLoading = loadingProducts || loadingPrice || fetchingProducts;

  const itemsToRender = isLoading
    ? Array.from({ length: 20 }).map((_, i) => ({
        url: `skeleton-${i}`,
      }))
    : (productsData?.data ?? []);

  return (
    <main
      className={"w-full flex flex-col items-center p-8 py-12 gap-8 flex-1"}
    >
      <FilterBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        setDebounceSearchText={setDebouncedSearchText}
        setDebouncedPriceRange={setDebouncedPriceRange}
        maxPrice={maxPrice}
        isLoading={isLoading}
      />
      <section
        className={
          "max-w-[1600px] w-full gap-8 grid grid-cols-[repeat(auto-fill,minmax(196px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(256px,1fr))]"
        }
      >
        {itemsToRender.map((p) => (
          <ProductCard key={p.url} product={p} isLoading={isLoading} />
        ))}
      </section>
      {productsData?.data && productsData.data.length > 0 ? (
        <Pagination
          page={page}
          setPage={setPage}
          hasNextPage={!!productsData?.nextPage}
          maxPage={productsData?.maxPage}
          isLoading={isLoading}
        />
      ) : (
        "Nebyly nalezeny žádné výsledky."
      )}
    </main>
  );
};

export default ProductsContainer;
