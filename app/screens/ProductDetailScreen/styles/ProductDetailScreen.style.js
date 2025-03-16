import { StyleSheet } from "react-native";

export const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "dark" ? "#121212" : "#F5EFE7",
      paddingTop: "15%",
    },
    productInfoContainer: {
      height: 600,
    },
    carouselContainer: {
      marginBottom: 20,
      borderRadius: 12,
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      paddingHorizontal: "3%",
      backgroundColor: "none",
    },
  });
