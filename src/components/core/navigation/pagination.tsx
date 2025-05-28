import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasNextPage: boolean;
};

const Pagination = ({ page, setPage, hasNextPage }: Props) => {
  return (
    <div
      className={"max-w-[800px] px-12 flex w-full justify-between items-center"}
    >
      <Button
        className={"h-10 md:h-12 aspect-square rounded-lg"}
        disabled={page < 1}
        onClick={() => setPage((prev) => prev - 1)}
      ></Button>
      <div className={"flex gap-12 items-center"}>
        <div
          className={`font-medium text-muted-foreground text-lg ${page < 1 && "opacity-0"}`}
        >
          {page}
        </div>
        <div className={"font-medium text-xl"}>{page + 1}</div>
        <div
          className={`font-medium text-muted-foreground text-lg ${!hasNextPage && "opacity-0"}`}
        >
          {page + 2}
        </div>
      </div>
      <Button
        className={"h-10 md:h-12 aspect-square rounded-lg"}
        disabled={!hasNextPage}
        onClick={() => setPage((prev) => prev + 1)}
      ></Button>
    </div>
  );
};

export default Pagination;
