import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    gap: 18,
  },
  logo: {
    width: 125,
    height: 24,
  },
  container: {
    backgroundColor: "#10172a",
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
    width: "100%",
  },
  textArea: {
    backgroundColor: "#1E293B",
    height: 120,
    borderRadius: 6,
    padding: 8,
    color: "#fff",
  },
  total: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#A3E635",
    width: "100%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    flexDirection: "row",
  },
});
