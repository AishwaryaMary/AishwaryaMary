import { StyleSheet } from "react-native";
import COLORS from "../../../utils/colors";

const getStyles = (theme) => {
  const colors = theme === "dark" ? COLORS.dark : COLORS.light;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors?.background,
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
      backgroundColor: "transparent",
    },
  });
};

export default getStyles;
