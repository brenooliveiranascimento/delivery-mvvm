import { deliveryApi } from "../api/delivery-api";
import { GetCategoriesResponse } from "../interfaces/https/get-categories";
import { GetProductsResponse, Product } from "../interfaces/https/get-products";

export interface getProductsParams {
  page: number;
  perPage: number;
  category?: string;
}

export const getProducts = async (
  params: getProductsParams
): Promise<GetProductsResponse> => {
  console.log(params);
  const { data } = await deliveryApi.post<GetProductsResponse>(
    "/products/paginated",
    params
  );

  return data;
};

export const getProductCategories = async (): Promise<string[]> => {
  const { data } = await deliveryApi.get<GetCategoriesResponse>(
    "/products/categories"
  );
  return data.categories ?? [];
};

export const getProductDetail = async (productId: number): Promise<Product> => {
  const { data } = await deliveryApi.get<Product>(`/products/${productId}`);
  return data;
};
