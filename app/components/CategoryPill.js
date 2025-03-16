import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CategoryPill = ({ category, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.pill, isSelected && styles.pillSelected]}
      onPress={onPress}
    >
      <Text style={styles.text}>{category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pill: {
    borderRadius: 20,
    backgroundColor: "#FAF3E0",
    borderWidth: 1,
    borderColor: "#D2B48C",
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  pillSelected: {
    backgroundColor: "#D2B48C",
  },
  text: {
    color: "#8B5E3C",
    fontSize: 14,
    fontWeight: "bold",
    padding: 12,
  },
});

export default CategoryPill;
