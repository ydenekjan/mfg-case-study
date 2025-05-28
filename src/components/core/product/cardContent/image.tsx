import { IProduct, Props } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import globe from "@public/globe.svg";
import React from "react";

export const ProductImage = ({
  title,
  image,
  isLoading,
}: {
  title?: IProduct["title"];
  image?: IProduct["image"];
} & Props["Loading"]) => {
  return (
    <div className={`aspect-square w-fill relative`}>
      {isLoading ? (
        <div className={"flex content-center items-center h-full w-full"}>
          <Skeleton className={"h-full w-full"} />
        </div>
      ) : (
        <Image
          alt={`${title} cover image`}
          fill={true}
          src={image || globe}
          style={{ objectFit: "contain" }}
        />
      )}
    </div>
  );
};
