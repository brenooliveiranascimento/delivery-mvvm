import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { useProductsStore } from "../../shared/store/cart.store";
import { router } from "expo-router";
import { Product } from "../../shared/interfaces/https/get-products";

export interface ProductDetailServices {
  getProductDetail: (productId: number) => Promise<Product>;
}

export interface useHomeModelParams {
  productDetailServices: ProductDetailServices;
}

export const useProductDetailModel = ({
  productDetailServices,
}: useHomeModelParams) => {
  const { id } = useLocalSearchParams();

  const { addProduct } = useProductsStore();

  const { data: productDetail, isLoading } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: () => productDetailServices.getProductDetail(Number(id)),
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
