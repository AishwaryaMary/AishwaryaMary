import { StyleSheet } from "react-native";
import COLORS from "../../../../utils/colors";

const getProductListStyles = (theme) => {
  const colors = theme === "dark" ? COLORS.dark : COLORS.light;

  return StyleSheet.create({
    errorText: {
      color: colors?.text,
      fontSize: 16,
      textAlign: "center",
      marginTop: 20,
    },
    noResultsText: {
      color: colors?.text,
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

export default getProductListStyles;
