import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasNextPage: boolean;
  isLoading: boolean;
};

const Pagination = ({ page, setPage, hasNextPage, isLoading }: Props) => {
  return (
    <div className={"max-w-[400px] flex w-full justify-between items-center"}>
      <Button
        variant={"secondary"}
        className={"h-10 md:h-12 aspect-square rounded-lg"}
        disabled={page < 1 || isLoading}
        onClick={() => setPage((prev) => prev - 1)}
      >
        <ChevronLeft className={"size-4 md:size-6"} />
      </Button>
      <div className={"flex gap-12 items-center"}>
        <h5
          className={`font-medium text-muted-foreground text-lg ${page < 1 && "opacity-0"}`}
        >
          {page}
        </h5>
        <h5 className={"font-medium text-xl"}>{page + 1}</h5>
        <h5
          className={`font-medium text-muted-foreground text-lg ${!hasNextPage && "opacity-0"}`}
        >
          {page + 2}
        </h5>
      </div>
      <Button
        className={"h-10 md:h-12 aspect-square rounded-lg"}
        variant={"secondary"}
        disabled={!hasNextPage || isLoading}
        onClick={() => setPage((prev) => prev + 1)}
      >
        <ChevronRight className={"size-4 md:size-6"} />
      </Button>
    </div>
  );
};

export default Pagination;
