import React from "react";
import { FlatList, Text, ActivityIndicator } from "react-native";
import ProductItem from "../../../atoms/ProductItem/views/ProductItem";
import getProductListStyles from "../styles/ProductList.style";

const ProductList = ({ filteredProducts = [], loading, error, theme }) => {
  const styles = getProductListStyles(theme);

  const renderItem = ({ item }) => <ProductItem product={item} theme={theme} />;

  if (loading) {
    return <ActivityIndicator size="large" color="#8B5E3C" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  if (filteredProducts?.length === 0) {
    return (
      <Text style={styles.noResultsText}>
        Sorry, we couldn't find what you are looking for.
      </Text>
    );
  }

  return (
    <FlatList
      data={filteredProducts}
      keyExtractor={(item) => item?.id?.toString()}
      numColumns={2}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.productList}
      columnWrapperStyle={styles.columnWrapper}
      initialNumToRender={6}
      maxToRenderPerBatch={10}
      windowSize={5}
      removeClippedSubviews
    />
  );
};

export default ProductList;
