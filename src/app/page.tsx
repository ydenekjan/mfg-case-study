"use client";

import Footer from "@/components/core/navigation/footer";
import Navbar from "@/components/core/navigation/navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsContainer from "@/components/core/section/productsContainer";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <div>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <ProductsContainer />
      </QueryClientProvider>
      <Footer />
    </div>
  );
}
