import { getProductDetail } from "../shared/services/get-products";
import { ProductDetailView } from "../ViewModels/ProductDetails/product-detail.view";
import {
  ProductDetailServices,
  useProductDetailModel,
} from "../ViewModels/ProductDetails/product-details.model";

const productDetailServices: ProductDetailServices = {
  getProductDetail: getProductDetail,
};

export default function ProductDetail() {
  const props = useProductDetailModel({
    productDetailServices,
  });

  return <ProductDetailView {...props} />;
}
