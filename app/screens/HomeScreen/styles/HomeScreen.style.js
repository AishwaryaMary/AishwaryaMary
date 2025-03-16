import { StyleSheet } from "react-native";

export const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      backgroundColor: theme === "dark" ? "#121212" : "#F5EFE7",
      paddingHorizontal: 16,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    toggleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    toggleLabel: {
      fontSize: 16,
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
      marginRight: 10,
      fontWeight: "500",
    },
    dropdown: {
      position: "absolute",
      top: 40,
      right: 0,
      backgroundColor: theme === "dark" ? "#1F1F1F" : "#FFFFFF",
      padding: 8,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      zIndex: 1000,
    },
    dropdownText: {
      fontSize: 14,
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
    },
    dropdownActionText: {
      fontSize: 16,
      color: "#8B5E3C",
      fontWeight: "500",
      marginVertical: 8,
    },
    productList: {
      marginBottom: 80,
    },
    columnWrapper: {
      justifyContent: "space-between",
    },
    noResultsText: {
      textAlign: "center",
      fontSize: 18,
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
      marginTop: 20,
    },
    errorText: {
      color: "red",
      textAlign: "center",
      fontSize: 16,
      marginTop: 20,
    },
  });
