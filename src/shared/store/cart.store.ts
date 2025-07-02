import { create } from "zustand";
import { Product } from "../interfaces/https/get-products";

interface ProductsState {
  products: Product[];

  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;

  getProducts: (category: string) => Product[];
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
      error: null,
    })),
  getProducts: () => get().products,
  removeProduct: (productId: number) =>
    set((state) => ({
      products: state.products.filter(({ id }) => id !== productId),
    })),
}));
