import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
import { LoadingScreen } from "../../shared/components/LoadingScreen";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { ProductDetailModel } from "./product-details.model";

export const ProductDetailView: FC<ProductDetailModel> = ({
  isLoading,
  productDetail,
  handleAddProduct,
}) => {
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: productDetail?.image }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{productDetail?.name}</Text>
        <Text style={styles.value}>
          R$ {productDetail?.value?.toFixed(2).replace(".", ",")}
        </Text>
        <Text style={styles.desciption}>{productDetail?.description}</Text>

        <View style={styles.ingredientes}>
          {productDetail?.ingredientes?.map(({ name }) => (
            <Text style={styles.desciption} key={name}>
              - {name};
            </Text>
          ))}
        </View>
        <TouchableOpacity
          onPress={handleAddProduct}
          style={styles.addToCartButton}
        >
          <Feather name="plus-circle" size={24} />
          <Text style={{ fontSize: 16, marginLeft: 16 }}>Adicionar pedido</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>
            Voltar ao cartápio
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
