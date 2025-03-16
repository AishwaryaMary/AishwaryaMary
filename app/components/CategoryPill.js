import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CategoryPill = ({ category, isSelected, onPress, theme }) => {
  const styles = getStyles(theme);
  return (
    <TouchableOpacity
      style={[styles.pill, isSelected && styles.pillSelected]}
      onPress={onPress}
    >
      <Text style={styles.text}>{category}</Text>
    </TouchableOpacity>
  );
};
const getStyles = (theme) =>
  StyleSheet.create({
    pill: {
      borderRadius: 20,
      backgroundColor: theme === "dark" ? "#1F1F1F" : "#FAF3E0",
      borderWidth: 1,
      borderColor: theme === "dark" ? "red" : "#D2B48C",
      marginRight: 8,
      alignItems: "center",
      justifyContent: "center",
      height: 40,
    },
    pillSelected: {
      backgroundColor: theme === "dark" ? "#333333" : "#D2B48C",
    },
    text: {
      color: theme === "dark" ? "#FFFFFF" : "#8B5E3C",
      fontSize: 14,
      fontWeight: "bold",
      padding: 12,
    },
  });

export default CategoryPill;
