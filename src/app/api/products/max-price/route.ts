import { NextRequest } from "next/server";
import data from "@/../data/dataset-serp.json";

export async function GET(request: NextRequest) {
  const result = Math.max(...data.map((item) => item.price));
  //mock delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
