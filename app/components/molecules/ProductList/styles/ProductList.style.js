import { StyleSheet } from "react-native";

export const getProductListStyles = (theme) => {
  return StyleSheet.create({
    errorText: {
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
      fontSize: 16,
      textAlign: "center",
      marginTop: 20,
    },
    noResultsText: {
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
      fontSize: 18,
      textAlign: "center",
      marginTop: 20,
    },
    productList: {
      paddingVertical: 12,
      gap: 12,
    },
    columnWrapper: {
      justifyContent: "space-between",
      gap: 12,
    },
  });
};
