import { StyleSheet } from "react-native";
import COLORS from "../../../../utils/colors";

const getBackButtonStyles = (theme) => {
  const colors = theme === "dark" ? COLORS.dark : COLORS.light;

  return StyleSheet.create({
    backButton: {
      padding: 10,
      marginLeft: 10,
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    backText: {
      color: colors?.text,
      fontSize: 16,
      fontWeight: "bold",
    },
  });
};

export default getBackButtonStyles;
