import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { IProduct, Props } from "@/types/types";

export const ProductContent = ({
  content,
  isLoading,
}: { content?: IProduct["content"] } & Props["Loading"]) => {
  if (isLoading)
    return (
      <div className={"flex flex-col gap-y-2"}>
        <Skeleton className={"h-2 w-full"} />
        <Skeleton className={"h-2 w-full"} />
        <Skeleton className={"h-2 w-full md:hidden"} />
        <Skeleton className={"h-2 w-full md:hidden"} />
        <Skeleton className={"h-2 w-2/3"} />
      </div>
    );

  return (
    <p
      className={
        "text-sm font-medium text-muted-foreground overflow-hidden line-clamp-6 md:line-clamp-4"
      }
    >
      {content}
    </p>
  );
};
