import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { FC } from "react";
import { Link } from "expo-router";
import { Product } from "../../../../shared/interfaces/https/get-products";
import { Image } from "expo-image";

interface Props {
  categories: string[];
  handleCategory: (category: string) => void;
  selectedCategory?: string;
  cartProducts: Product[];
}

export const Header: FC<Props> = ({
  categories,
  handleCategory,
  selectedCategory,
  cartProducts,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View>
            <Image
              source={require("../../../../../assets/Logo.png")}
              style={{
                width: 124,
                height: 24,
              }}
            />
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>
              Faça seu pedido
            </Text>
          </View>

          <Link
            href={{
              pathname: "cart",
            }}
          >
            <Feather name="shopping-bag" color={"#fff"} size={26} />
          </Link>
          {cartProducts?.length > 0 && (
            <View style={styles.cartItenIndicator}>
              <Text style={{ fontSize: 12 }}>{cartProducts?.length}</Text>
            </View>
          )}
        </View>
        <View style={styles.borderBottom} />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.categoryCotainer}
      >
        {categories.map((categoty) => (
          <TouchableOpacity
            onPress={() => handleCategory(categoty)}
            style={{
              ...styles.category,
              ...(selectedCategory === categoty && {
                borderColor: "#BEF264",
                borderWidth: 1,
              }),
            }}
            key={categoty}
          >
            <Text style={styles.categoryText}>{categoty}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};
