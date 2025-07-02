import { deliveryApi } from "../api/delivery-api";
import { GetCategoriesResponse } from "../interfaces/https/get-categories";
import { GetProductsResponse, Product } from "../interfaces/https/get-products";

interface getProductsParams {
  page: number;
  perPage: number;
  category?: string;
}

export const getProducts = async (
  params: getProductsParams
): Promise<Product[]> => {
  console.log(params);
  const { data } = await deliveryApi.post<GetProductsResponse>(
    "/products/paginated",
    params
  );

  return data.items;
};

export const getCategories = async (): Promise<string[]> => {
  const { data } = await deliveryApi.get<GetCategoriesResponse>(
    "/products/categories"
  );
  return data.categories ?? [];
};

export const getProductDetail = async (productId: number): Promise<Product> => {
  const { data } = await deliveryApi.get<Product>(`/products/${productId}`);
  return data;
};
