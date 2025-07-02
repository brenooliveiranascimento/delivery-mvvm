import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getProductsParams } from "../../shared/services/get-products";
import {
  GetProductsResponse,
  Product,
} from "../../shared/interfaces/https/get-products";
import { useState } from "react";
import { useProductsStore } from "../../shared/store/cart.store";
import { formatProductsToSections } from "../../shared/utils/product.utils";
import { SectionData } from "./interfaces/section-data";

export interface ProductServices {
  getProducts: (params: getProductsParams) => Promise<GetProductsResponse>;
  getProductCategories: () => Promise<string[]>;
}

interface useHomeModelParams {
  productServices: ProductServices;
}

export const useHomeModel = ({ productServices }: useHomeModelParams) => {
  const { products: cartProducts } = useProductsStore();
  const [categorySelected, setCategorySelected] = useState<string | undefined>(
    undefined
  );

  const perPage = 5;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["products", categorySelected],
    queryFn: ({ pageParam }) =>
      productServices.getProducts({
        page: pageParam,
        perPage,
        category: categorySelected,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      console.log({ lastPageParam });
      if (!lastPage || lastPageParam >= lastPage.totalPages) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: productServices.getProductCategories,
  });

  const products: Product[] = data?.pages.flatMap((page) => page.items) ?? [];

  const formattedProducts: SectionData[] = formatProductsToSections(products);

  const handleCategory = (category: string) => {
    if (category === categorySelected) {
      setCategorySelected(undefined);
    } else {
      setCategorySelected(category);
    }
  };

  return {
    products: formattedProducts,
    isFetching,
    isFetchingNextPage,
    hasNextPage: Boolean(hasNextPage),
    fetchNextPage,
    refetch,
    handleCategory,
    categories: categories ?? [],
    categorySelected,
    isLoading,
    cartProducts,
  };
};
