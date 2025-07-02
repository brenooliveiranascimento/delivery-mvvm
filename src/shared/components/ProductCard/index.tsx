import { Text, TouchableOpacity, View } from "react-native";
import { FC } from "react";
import { Image } from "expo-image";
import { styles } from "./styles";
import { router } from "expo-router";
import { Product } from "../../interfaces/https/get-products";

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "productDetail",
          params: {
            id: product.id,
          },
        })
      }
      style={styles.container}
    >
      <Image
        source={{
          uri: product.image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
