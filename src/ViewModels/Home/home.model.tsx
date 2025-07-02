import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCategories, getProducts } from "../../shared/services/get-products";
import { Product } from "../../shared/interfaces/https/get-products";
import { useState } from "react";
import { GetCategoriesResponse } from "../../shared/interfaces/https/get-categories";
import { useProductsStore } from "../../shared/store/cart.store";

export interface SectionData {
  title: string;
  data: Product[];
}

export interface HomeModel {
  products: SectionData[];
  isFetching: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  refetch: () => void;
  handleCategory: (category: string) => void;
  categories: string[];
  categorySelected: string | undefined;
  isLoading: boolean;
  cartProducts: Product[];
}

export const useHomeModel = (): HomeModel => {
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
    error,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["products", categorySelected],
    queryFn: ({ pageParam }) =>
      getProducts({ page: pageParam, perPage, category: categorySelected }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (!lastPage || lastPage.length < perPage) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

  const {
    data: categories,
    isLoading: loadingCategories,
    error: categoryError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const products: Product[] = data?.pages.flat() ?? [];

  const formattedProducts: SectionData[] = products.reduce((acc, product) => {
    const existingCategoryIndex = acc.findIndex(
      (section) => section.title === product.category
    );

    if (existingCategoryIndex !== -1) {
      acc[existingCategoryIndex].data.push(product);
    } else {
      acc.push({
        title: product.category,
        data: [product],
      });
    }

    return acc;
  }, [] as SectionData[]);

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
