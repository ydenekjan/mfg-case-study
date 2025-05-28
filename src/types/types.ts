import { Sorting } from "@/components/core/filters/filterBar";

export interface Props {
  Children: { children: React.ReactNode };
  ClassName: { classname: string };
  Loading: { isLoading?: boolean };
}

export interface IProduct {
  image: string;
  ean: string;
  price: number;
  categories: string;
  title: string;
  brand: string;
  content: string;
  url: string;
  relevance: number;
}

export interface IGetProducts {
  data: IProduct[];
  nextPage: number;
  maxPage: number;
}

export interface IGetProductsParams {
  page: number;
  sortBy: Sorting;
  searchText: string;
}
