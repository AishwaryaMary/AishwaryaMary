import { StyleSheet } from "react-native";
import COLORS from "../../../../utils/colors";

const getStyles = (theme) => {
  const colors = theme === "dark" ? COLORS.dark : COLORS.light;

  return StyleSheet.create({
    pill: {
      borderRadius: 20,
      backgroundColor: colors?.pillBackground,
      borderWidth: 1,
      borderColor: colors?.pillBorder,
      marginRight: 8,
      alignItems: "center",
      justifyContent: "center",
      height: 40,
    },
    pillSelected: {
      backgroundColor: colors?.pillSelectedBackground,
    },
    text: {
      color: colors?.text,
      fontSize: 14,
      fontWeight: "bold",
      padding: 12,
    },
  });
};

export default getStyles;
