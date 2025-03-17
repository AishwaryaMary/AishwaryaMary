import { StyleSheet } from "react-native";
import COLORS from "../../../../utils/colors";

const getHeaderStyles = (theme) => {
  const colors = theme === "dark" ? COLORS.dark : COLORS.light;

  return StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 15,
      paddingHorizontal: 5,
    },
    toggleContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    toggleLabel: {
      fontSize: 16,
      marginRight: 10,
      color: colors?.text,
    },
    dropdown: {
      position: "absolute",
      top: 50,
      right: 15,
      backgroundColor: colors?.imageBackground,
      borderRadius: 5,
      padding: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      zIndex: 1000,
    },
    dropdownText: {
      color: colors?.dropdownText,
    },
    dropdownActionText: {
      color: colors?.text,
      fontWeight: "bold",
    },
    userName: {
      color: colors?.text,
    },
    userNameContainer: {
      flexDirection: "column",
      alignItems: "flex-end",
    },
  });
};

export default getHeaderStyles;
