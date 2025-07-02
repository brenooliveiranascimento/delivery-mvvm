import { Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../../../shared/interfaces/https/get-products";
import { FC } from "react";
import { Image } from "expo-image";
import { styles } from "./styles";
import { router } from "expo-router";

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
