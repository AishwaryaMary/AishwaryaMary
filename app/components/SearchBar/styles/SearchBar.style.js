import { StyleSheet } from "react-native";

const getStyles = (theme) =>
  StyleSheet.create({
    searchBar: {
      height: 40,
      borderColor: theme === "dark" ? "red" : "#D2B48C",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 12,
      backgroundColor: "#FFFFFF",
    },
  });

export default getStyles;
