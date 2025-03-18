import { StyleSheet } from "react-native";
import COLORS from "../../../../utils/colors";

const getImageCarouselStyle = (theme) => {
  const colors = theme === "dark" ? COLORS.dark : COLORS.light;

  return StyleSheet.create({
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
    image: {
      width: 300,
      height: 200,
      marginRight: 10,
      borderRadius: 8,
    },
    errorContainer: {
      backgroundColor: colors.backgroundColorProduct,
      justifyContent: "center",
      alignItems: "center",
      width: 370,
      height: 200,
      borderRadius: 8,
    },
    errorText: {
      color: colors.descriptionComponent,
      textAlign: "center",
    },
  });
};

export default getImageCarouselStyle;
