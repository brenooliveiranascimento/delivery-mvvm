import { useProductsStore } from "../../shared/store/cart.store";

export const useCartModel = () => {
  const { products, removeProduct, incrementProduct, decrementProduct } =
    useProductsStore();

  const total = products.reduce(
    (acc, product) => (acc += Number(product.value)),
    0
  );

  return {
    products,
    removeProduct,
    incrementProduct,
    decrementProduct,
    total,
  };
};
