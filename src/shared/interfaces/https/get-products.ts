export interface Product {
  id: number;
  name: string;
  value?: number;
  category: string;
  description: string;
  ingredientes?: { name: string }[];
  image: string;
}

export interface GetProductsResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Product[];
}
