import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10172a",
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 250,
  },
  contentContainer: {
    padding: 16,
    gap: 16,
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginTop: 26,
  },
  value: {
    fontSize: 24,
    color: "#A3E635",
    fontWeight: "bold",
  },
  desciption: {
    color: "#94A3B8",
    fontSize: 15,
  },
  ingredientes: {
    padding: 16,
    gap: 8,
    flex: 1,
  },

  addToCartButton: {
    backgroundColor: "#A3E635",
    width: "100%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    flexDirection: "row",
  },
  backButton: {
    width: "100%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
});
