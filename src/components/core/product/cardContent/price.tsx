import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { IProduct, Props } from "@/types/types";

export const ProductPrice = ({
  price,
  isLoading,
}: { price?: IProduct["price"] } & Props["Loading"]) => {
  if (isLoading) return <Skeleton className={"h-4 mb-1 w-4/9"} />;

  if (!price)
    return <p className={"text-lg font-medium text-primary"}>Neznámá cena</p>;

  const parsedPrice = new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
  }).format(price);

  return (
    <p className={"h-fit text-md md:text-lg font-medium text-primary"}>
      {parsedPrice}
    </p>
  );
};
