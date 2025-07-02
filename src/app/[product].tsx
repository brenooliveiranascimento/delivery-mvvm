import { ProductDetailView } from "../ViewModels/ProductDetails/product-detail.view";
import { useProductDetailModel } from "../ViewModels/ProductDetails/product-details.model";

export default function ProductDetail() {
  const props = useProductDetailModel();

  return <ProductDetailView {...props} />;
}
