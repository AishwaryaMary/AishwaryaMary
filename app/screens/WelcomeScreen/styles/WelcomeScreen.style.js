import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5EFE7",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#8B5E3C",
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#D2B48C",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#8B5E3C",
    fontWeight: "600",
  },

  buttonTextOr: {
    fontSize: 14,
    color: "#8B5E3C",
    fontWeight: "600",
  },
  orContainer: {
    alignItems: "center",
    paddingVertical: 12,
  },
});

export default styles;
