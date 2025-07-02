import { ActivityIndicator, View } from "react-native";

export const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator color={"#fff"} size={24} />
    </View>
  );
};
