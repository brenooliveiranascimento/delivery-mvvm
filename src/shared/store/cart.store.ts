import { create } from "zustand";
import { Product } from "../interfaces/https/get-products";

interface CartProduct extends Product {
  quantity: number;
}

interface ProductsState {
  products: CartProduct[];

  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  getProducts: (category: string) => Product[];
  incrementProduct: (productId: number) => void;
  decrementProduct: (productId: number) => void;
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, { ...product, quantity: 1 }],
      error: null,
    })),
  getProducts: () => get().products,
  removeProduct: (productId: number) =>
    set((state) => ({
      products: state.products.filter(({ id }) => id !== productId),
    })),
  incrementProduct: (productId: number) =>
    set((state) => ({
      products: state.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: (product.quantity += 1),
          };
        }
        return product;
      }),
    })),
  decrementProduct: (productId: number) =>
    set((state) => ({
      products: state.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: (product.quantity -= 1),
          };
        }
        return product;
      }),
    })),
}));
