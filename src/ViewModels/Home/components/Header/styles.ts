import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    alignItems: "center",
    padding: 8,
    gap: 18,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
    width: "100%",
  },
  categoryCotainer: {
    width: "100%",
    paddingLeft: 16,
    padding: 16,
  },
  category: {
    backgroundColor: "#1E293B",
    padding: 8,
    borderRadius: 6,
    marginRight: 16,
    paddingHorizontal: 16,
    borderColor: "#1E293B",
    borderWidth: 1,
  },
  categoryText: {
    color: "#F1F5F9",
    fontSize: 16,
  },
  cartItenIndicator: {
    backgroundColor: "#BEF264",
    borderRadius: 14,
    width: 14,
    height: 14,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    marginTop: -5,
  },
});
