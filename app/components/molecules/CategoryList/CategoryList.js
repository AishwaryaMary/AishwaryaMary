import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CategoryPill from "../../atoms/CategoryPill/views/CategoryPill";

const CategoryList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  theme,
}) => {
  const styles = getStyles();

  const handlePress = (item) =>
    setSelectedCategory(item === selectedCategory ? null : item);

  const renderItem = ({ item }) => (
    <CategoryPill
      category={item}
      isSelected={selectedCategory === item}
      onPress={() => handlePress(item)}
      theme={theme}
    />
  );

  return (
    <View style={styles.categoryContainer}>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => `${item}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </View>
  );
};
const getStyles = () =>
  StyleSheet.create({
    categoryContainer: {
      paddingVertical: 4,
      marginBottom: 8,
    },
  });
export default CategoryList;
