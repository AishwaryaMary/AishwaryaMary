import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CategoryPill from "../../atoms/CategoryPill/views/CategoryPill";

const CategoryList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  theme,
}) => {
  const styles = getStyles(theme);
  return (
    <View style={styles.categoryContainer}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryPill
            category={item}
            isSelected={selectedCategory === item}
            onPress={() =>
              setSelectedCategory(item === selectedCategory ? null : item)
            }
            theme={theme}
          />
        )}
      />
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    categoryContainer: {
      paddingVertical: 4,
      marginBottom: 8,
    },
  });

export default CategoryList;
