import { StyleSheet } from "react-native";

const getProductInfoStyles = (theme) =>
  StyleSheet.create({
    detailsContainer: {
      padding: 16,
      backgroundColor: theme === "dark" ? "#1F1F1F" : "#FFFFFF",
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      marginHorizontal: 16,
      marginBottom: 20,
      borderColor: theme === "dark" ? "red" : "#D2B48C",
      borderWidth: 1,
    },
    heading: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 20,
      fontWeight: "600",
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
      marginBottom: 8,
      width: "80%",
    },
    price: {
      fontSize: 20,
      color: theme === "dark" ? "#FF6347" : "#800000",
      marginBottom: 12,
      fontWeight: "bold",
      textAlign: "center",
    },
    description: {
      fontSize: 16,
      color: theme === "dark" ? "#DDDDDD" : "#6E4B27",
      lineHeight: 24,
    },
  });

export default getProductInfoStyles;
