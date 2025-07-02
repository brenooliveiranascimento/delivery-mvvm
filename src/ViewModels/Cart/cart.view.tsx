import { FC } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useCartModel } from "./cart.model";
import { ProductCard } from "../../shared/components/ProductCard";
import { styles } from "./styles";
import { EmptyList } from "./components/EmptyList";
import { Image } from "expo-image";

export const CartView: FC<ReturnType<typeof useCartModel>> = ({
  decrementProduct,
  incrementProduct,
  products,
  removeProduct,
  total,
}) => {
  if (!products.length) {
    return <EmptyList />;
  }
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../../assets/Logo.png")}
        style={{
          width: 124,
          height: 24,
        }}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Seu carrinho</Text>
        <View style={styles.borderBottom} />
      </View>
      {products.map((product) => (
        <ProductCard
          key={`product-cart-list-${product.id}`}
          product={product}
        />
      ))}
      <View style={styles.contentContainer}>
        <View style={{ gap: 16 }}>
          <View style={styles.borderBottom} />
          <Text style={styles.total}>
            Total: <Text style={{ color: "#A3E635" }}>R$ {total}</Text>
          </Text>
          <TextInput
            placeholder="Informe o endereço de entrega com rua, bairro. CEP. número e complemento..."
            style={styles.textArea}
            placeholderTextColor={"#94A3B8"}
            multiline
          />
        </View>
        <TouchableOpacity>
          <Text>Enviar pedido</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Enviar pedido</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
