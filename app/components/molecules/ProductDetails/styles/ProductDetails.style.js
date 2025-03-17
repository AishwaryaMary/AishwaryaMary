import { StyleSheet } from "react-native";
import COLORS from "../../../../utils/colors";

const getProductInfoStyles = (theme) => {
  const colors = theme === "dark" ? COLORS.dark : COLORS.light;

  return StyleSheet.create({
    detailsContainer: {
      padding: 16,
      backgroundColor: colors?.backgroundColorProduct,
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      marginHorizontal: 16,
      marginBottom: 20,
      borderColor: colors?.borderColorProduct,
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
      color: colors?.text,
      marginBottom: 8,
      width: "80%",
    },
    price: {
      fontSize: 20,
      color: colors?.priceColor,
      marginBottom: 12,
      fontWeight: "bold",
      textAlign: "center",
    },
    description: {
      fontSize: 16,
      color: colors?.descriptionComponent,
      lineHeight: 24,
    },
  });
};

export default getProductInfoStyles;
