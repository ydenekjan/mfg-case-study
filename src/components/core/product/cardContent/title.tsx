import { IProduct, Props } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const ProductTitle = ({
  title,
  isLoading,
}: { title?: IProduct["title"] } & Props["Loading"]) => {
  if (isLoading)
    return (
      <div className={"flex flex-col gap-y-3 py-2"}>
        <Skeleton className={"h-4 w-full"} />
        <Skeleton className={"h-4 w-2/3"} />
      </div>
    );

  return (
    <h3
      className={
        "text-md md:text-lg font-bold text-secondary-foreground line-clamp-2 md:line-clamp-3 overflow-ellipsis leading-6"
      }
    >
      {title}
    </h3>
  );
};
