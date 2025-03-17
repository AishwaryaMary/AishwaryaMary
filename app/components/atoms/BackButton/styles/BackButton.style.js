import { StyleSheet } from "react-native";

const getBackButtonStyles = (theme) =>
  StyleSheet.create({
    backButton: {
      padding: 10,
      marginLeft: 10,
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    backText: {
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

export default getBackButtonStyles;
