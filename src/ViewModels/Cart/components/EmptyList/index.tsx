import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { styles } from "./styles";

export const EmptyList = () => {
  return (
    <View style={styles.emptyCartContainer}>
      <View style={{ alignItems: "center", gap: 8 }}>
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
          Seu carrinho está vazio!
        </Text>
        <Text style={{ color: "#fff" }}>Volte e escolha alguns produtos</Text>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/")}
        style={styles.backButton}
      >
        <Feather name="shopping-bag" size={24} />
        <Text style={{ fontSize: 16, marginLeft: 16 }}>Voltar as compras</Text>
      </TouchableOpacity>
    </View>
  );
};
