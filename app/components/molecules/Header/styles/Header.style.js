import { StyleSheet } from "react-native";

const getHeaderStyles = (theme) => {
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
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
    },
    dropdown: {
      position: "absolute",
      top: 50,
      right: 15,
      backgroundColor: theme === "dark" ? "#333333" : "#FFFFFF",
      borderRadius: 5,
      padding: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      zIndex: 1000,
    },
    dropdownText: {
      color: theme === "dark" ? "#FFFFFF" : "#333333",
      marginBottom: 10,
    },
    dropdownActionText: {
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
      fontWeight: "bold",
    },
  });
};

export default getHeaderStyles;
