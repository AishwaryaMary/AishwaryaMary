import { StyleSheet } from "react-native";
import COLORS from "../../../../utils/colors";

const getRelatedProductsStyles = (theme) => {
  const colors = theme === "dark" ? COLORS.dark : COLORS.light;

  return StyleSheet.create({
    relatedProductsContainer: {
      marginTop: 10,
      paddingLeft: 16,
    },
    relatedTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors?.text,
      marginBottom: 12,
    },
    relatedItem: {
      width: 150,
      marginRight: 10,
      backgroundColor: colors?.backgroundColorProduct,
      borderRadius: 8,
      padding: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      borderColor: colors?.borderColorProduct,
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
      color: colors?.text,
      height: 40,
    },
    relatedPrice: {
      fontSize: 14,
      color: colors?.priceColor,
      fontWeight: "bold",
    },
    imageAlt: {
      color: colors?.imageAltBackground,
      fontSize: 12,
    },
    relatedItemAlt: {
      width: "100%",
      height: 100,
      borderRadius: 8,
      marginBottom: 8,
      backgroundColor: colors?.imageBackground,
      justifyContent: "center",
      alignItems: "center",
    },
  });
};

export default getRelatedProductsStyles;
