import {
  getProductCategories,
  getProducts,
} from "../shared/services/get-products";
import { ProductServices, useHomeModel } from "../ViewModels/Home/home.model";
import { HomeVIew } from "../ViewModels/Home/home.view";

const productServices: ProductServices = {
  getProductCategories: getProductCategories,
  getProducts: getProducts,
};

export default function Home() {
  const props = useHomeModel({
    productServices,
  });

  return <HomeVIew {...props} />;
}
