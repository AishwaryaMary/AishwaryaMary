import React from "react";
import { TouchableOpacity, Text } from "react-native";
import getStyles from "../styles/CategoryPill.style";

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

export default CategoryPill;
