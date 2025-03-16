import { StyleSheet } from "react-native";

export const getRelatedProductsStyles = (theme) =>
  StyleSheet.create({
    relatedProductsContainer: {
      marginTop: 10,
      paddingLeft: 16,
    },
    relatedTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
      marginBottom: 12,
    },
    relatedItem: {
      width: 150,
      marginRight: 10,
      backgroundColor: theme === "dark" ? "#1F1F1F" : "#FFFFFF",
      borderRadius: 8,
      padding: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      borderColor: theme === "dark" ? "red" : "#D2B48C",
      borderWidth: 1,
    },
    relatedImage: {
      width: "100%",
      height: 100,
      borderRadius: 8,
      marginBottom: 8,
    },
    relatedText: {
      fontSize: 14,
      fontWeight: "500",
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
      height: 40,
    },
    relatedPrice: {
      fontSize: 14,
      color: theme === "dark" ? "#FF6347" : "#800000",
      fontWeight: "bold",
    },
  });
