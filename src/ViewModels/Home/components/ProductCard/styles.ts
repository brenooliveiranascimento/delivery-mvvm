import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 0,
  },
  image: {
    width: 92,
    height: 92,
    borderRadius: 6,
  },
  content: {
    padding: 16,
    justifyContent: "center",
    flex: 1,
    width: "60%",
    gap: 6,
  },
  title: {
    fontSize: 24,
    color: "#f8fafc",
  },
  description: {
    fontSize: 14,
    color: "#94a3b8",
  },
});
