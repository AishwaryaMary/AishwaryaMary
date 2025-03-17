import { StyleSheet } from "react-native";
import COLORS from "../../../../utils/colors";

const getStyles = (theme) => {
  const colors = theme === "dark" ? COLORS.dark : COLORS.light;

  return StyleSheet.create({
    container: {
      padding: 10,
      marginBottom: 12,
      backgroundColor: colors?.backgroundColorProduct,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors?.borderColorProduct,
      width: "48%",
    },
    imageContainer: {
      height: 150,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors?.imageBackground,
      borderRadius: 10,
      marginBottom: 10,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    imageAlt: {
      color: colors?.imageAltBackground,
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
      color: colors?.text,
      height: 50,
    },
    price: {
      fontSize: 14,
      color: colors?.priceColor,
      marginBottom: 10,
      fontWeight: "bold",
    },
    category: {
      fontSize: 12,
      color: colors?.categoryColor,
    },
  });
};

export default getStyles;
