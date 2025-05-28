import React from "react";
import { IProduct, Props } from "@/types/types";
import { ProductImage } from "@/components/core/product/cardContent/image";
import { ProductTitle } from "@/components/core/product/cardContent/title";
import { ProductContent } from "@/components/core/product/cardContent/content";
import { ProductPrice } from "@/components/core/product/cardContent/price";
import { ProductRedirect } from "@/components/core/product/cardContent/redirect";

const ProductCard = ({
  product,
  isLoading,
}: { product: Partial<IProduct> } & Props["Loading"]) => {
  const { title, url, content, image, price } = product;

  return (
    <div
      className={
        "min-w-[196px] w-full rounded-md shadow-sm hover:shadow-lg border border-border transition-all ease-in p-4 lg:p-6 flex flex-col gap-y-4"
      }
    >
      <ProductImage image={image} title={title} isLoading={isLoading} />
      <ProductTitle title={title} isLoading={isLoading} />
      <ProductContent content={content} isLoading={isLoading} />
      <div className={"flex w-full justify-between items-end h-fit mt-auto"}>
        <ProductPrice price={price} isLoading={isLoading} />
        <ProductRedirect url={url} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ProductCard;
