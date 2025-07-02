import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { getProductDetail } from "../../shared/services/get-products";
import { useProductsStore } from "../../shared/store/cart.store";
import { Product } from "../../shared/interfaces/https/get-products";
import { router } from "expo-router";

export interface ProductDetailModel {
  productDetail: Product | undefined;
  isLoading: boolean;
  handleAddProduct: () => void;
}

export const useProductDetailModel = (): ProductDetailModel => {
  const { id } = useLocalSearchParams();

  const { addProduct } = useProductsStore();

  const {
    data: productDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: () => getProductDetail(Number(id)),
  });

  const handleAddProduct = () => {
    if (productDetail) {
      addProduct(productDetail);
      router.back();
    }
  };

  return {
    productDetail,
    isLoading,
    handleAddProduct,
  };
};
