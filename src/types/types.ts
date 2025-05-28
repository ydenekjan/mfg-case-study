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
