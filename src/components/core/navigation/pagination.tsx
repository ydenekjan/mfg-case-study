import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasNextPage: boolean;
  maxPage: number;
  isLoading: boolean;
};

const Pagination = ({
  page,
  setPage,
  hasNextPage,
  maxPage,
  isLoading,
}: Props) => {
  return (
    <div className={"max-w-[600px] flex w-full justify-between items-center"}>
      <Button
        variant={"secondary"}
        className={"rounded-lg cursor-pointer"}
        disabled={page < 1 || isLoading}
        onClick={() => setPage((prev) => prev - 1)}
      >
        <ChevronLeft />
      </Button>
      <div className={"flex gap-12 items-center"}>
        <h5
          onClick={() => setPage(0)}
          className={`max-md:hidden font-medium text-muted-foreground text-lg cursor-pointer ${page < 3 && "opacity-0 pointer-events-none"}`}
        >
          1
        </h5>
        <h5
          onClick={() => (page < 3 ? setPage(0) : null)}
          className={`max-md:hidden font-medium text-muted-foreground text-lg ${page >= 3 ? "cursor-default" : "cursor-pointer"} ${page < 2 && "opacity-0 pointer-events-none"}`}
        >
          {page >= 3 ? "..." : "1"}
        </h5>
        <h5
          onClick={() => setPage(page - 1)}
          className={`font-medium text-muted-foreground text-lg cursor-pointer ${page < 1 && "opacity-0 pointer-events-none"}`}
        >
          {page}
        </h5>
        <h5 className={"font-medium text-xl cursor-pointer"}>{page + 1}</h5>
        <h5
          onClick={() => setPage(page + 1)}
          className={`font-medium text-muted-foreground text-lg cursor-pointer ${!hasNextPage && "opacity-0 pointer-events-none"}`}
        >
          {page + 2}
        </h5>
        <h5
          className={`max-md:hidden font-medium text-muted-foreground text-lg ${page < maxPage ? "cursor-default" : "cursor-pointer"} ${page >= maxPage - 1 && "opacity-0 pointer-events-none"}`}
        >
          {page < maxPage ? "..." : maxPage}
        </h5>
        <h5
          onClick={() => setPage(maxPage)}
          className={`max-md:hidden font-medium text-muted-foreground text-lg cursor-pointer ${page >= maxPage - 2 && "opacity-0 pointer-events-none"}`}
        >
          {maxPage + 1}
        </h5>
      </div>
      <Button
        className={"rounded-lg cursor-pointer"}
        variant={"secondary"}
        disabled={!hasNextPage || isLoading}
        onClick={() => setPage((prev) => prev + 1)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
