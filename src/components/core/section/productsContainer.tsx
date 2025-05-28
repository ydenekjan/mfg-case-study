"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/core/product/productCard";
import { useGetProducts } from "@/hooks/products/useGetProducts";
import Pagination from "@/components/core/navigation/pagination";
import FilterBar, { Sorting } from "@/components/core/filters/filterBar";

const ProductsContainer = () => {
  const [page, setPage] = useState(3);
  const [sortBy, setSortBy] = useState<Sorting>("top");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  const { data, isLoading, isPlaceholderData, isError, isRefetching, refetch } =
    useGetProducts({
      page,
      sortBy,
      searchText: debouncedSearchText,
    });

  //scroll to top when new page is fetched
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  //go back to the first page on sorting or search change
  useEffect(() => {
    setPage(0);
  }, [sortBy, debouncedSearchText]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isError)
    return (
      <main className={"w-full flex flex-col items-center p-8 gap-8 text-xl"}>
        Nepodařilo se načíst produkty.
      </main>
    );

  return (
    <main className={"w-full flex flex-col items-center p-8 gap-8"}>
      <FilterBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        setDebounceSearchText={setDebouncedSearchText}
        isLoading={isLoading || isRefetching}
      />
      <section
        className={
          "max-w-[1600px] w-full gap-8 grid grid-cols-[repeat(auto-fill,minmax(196px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(256px,1fr))]"
        }
      >
        {data?.data.map((p, idx) => {
          return (
            <ProductCard
              key={isPlaceholderData ? idx : p.title}
              product={p}
              isLoading={isLoading || isRefetching || isPlaceholderData}
            />
          );
        })}
      </section>
      {data?.data && data.data.length > 0 ? (
        <Pagination
          page={page}
          setPage={setPage}
          hasNextPage={!!data?.nextPage}
          maxPage={data?.maxPage}
          isLoading={isLoading || isRefetching}
        />
      ) : (
        "Nebyly nalezeny žádné výsledky."
      )}
    </main>
  );
};

export default ProductsContainer;
