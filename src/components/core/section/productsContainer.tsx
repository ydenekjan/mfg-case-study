"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/core/product/productCard";
import { useGetProducts } from "@/hooks/products/useGetProducts";
import Pagination from "@/components/core/navigation/pagination";
import FilterBar, { Sorting } from "@/components/core/filters/filterBar";

const ProductsContainer = () => {
  const [page, setPage] = useState(0);
  const [sortBy, setSortBy] = useState<Sorting>("top");

  const {
    data,
    isLoading,
    isPlaceholderData,
    isFetched,
    isError,
    isRefetching,
  } = useGetProducts({
    page,
    sortBy,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isFetched]);

  console.log(data);

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
      {data?.data && (
        <Pagination
          page={page}
          setPage={setPage}
          hasNextPage={!!data?.nextPage}
        />
      )}
    </main>
  );
};

export default ProductsContainer;
