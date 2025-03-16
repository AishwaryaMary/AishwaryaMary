import { StyleSheet } from "react-native";

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      padding: 10,
      marginBottom: 12,
      backgroundColor: theme === "dark" ? "#1F1F1F" : "#FFFFFF",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme === "dark" ? "red" : "#D2B48C",
      width: "48%",
    },
    imageContainer: {
      height: 150,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme === "dark" ? "#333333" : "#F5EFE7",
      borderRadius: 10,
      marginBottom: 10,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    imageAlt: {
      color: theme === "dark" ? "#DDDDDD" : "#8B5E3C",
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
      height: 50,
    },
    price: {
      fontSize: 14,
      color: theme === "dark" ? "#FF6347" : "#800000",
      marginBottom: 10,
      fontWeight: "bold",
    },
    category: {
      fontSize: 12,
      color: theme === "dark" ? "#AAAAAA" : "#A9A9A9",
    },
  });

export default getStyles;
