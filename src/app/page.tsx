"use client";

import Navbar from "@/components/core/navigation/navbar";
import ProductsContainer from "@/components/core/section/productsContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <ProductsContainer />
      <aside></aside>
    </QueryClientProvider>
  );
}
