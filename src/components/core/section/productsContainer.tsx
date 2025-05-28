"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/core/product/productCard";
import { useGetProducts } from "@/hooks/products/useGetProducts";
import Pagination from "@/components/core/navigation/pagination";

const ProductsContainer = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading, isPlaceholderData, isFetched } = useGetProducts({
    page,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isFetched]);

  console.log(data);

  return (
    <main className={"w-full flex flex-col items-center p-8 gap-8"}>
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
              isLoading={isLoading || isPlaceholderData}
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
