import { Text, View } from "react-native";
import { CartView } from "../ViewModels/Cart/cart.view";
import { useCartModel } from "../ViewModels/Cart/cart.model";

export default function Cart() {
  const props = useCartModel();

  return <CartView {...props} />;
}
