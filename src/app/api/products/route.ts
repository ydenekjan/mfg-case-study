import { NextRequest } from "next/server";
import data from "@/../data/dataset-serp.json";
import { Sorting } from "@/components/core/filters/filterBar";
import { getSearchedData, getSortedData } from "@/lib/utils";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  //not really great parsing but doesn't matter in mock api
  const page = Number(searchParams.get("page")) || 0;
  const sortBy = (searchParams.get("sortBy") as Sorting) || "top";
  const searchText = searchParams.get("searchText") || "";
  const pageSize = 20;

  const filteredData = getSearchedData(getSortedData(data, sortBy), searchText);

  const result = {
    data: filteredData.slice(page * pageSize, page * pageSize + pageSize),
    nextPage: (page + 1) * pageSize < filteredData.length ? page + 1 : null,
    maxPage: Math.ceil(filteredData.length / pageSize) - 1,
  };

  //mock delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
