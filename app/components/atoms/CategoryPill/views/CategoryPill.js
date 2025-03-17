import React from "react";
import { TouchableOpacity, Text } from "react-native";
import getStyles from "../styles/CategoryPill.style";

const CategoryPill = ({ category, isSelected, onPress, theme }) => {
  const styles = getStyles(theme);
  return (
    <TouchableOpacity
      style={[styles.pill, isSelected && styles.pillSelected]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{category || "No category"}</Text>
    </TouchableOpacity>
  );
};

export default CategoryPill;
