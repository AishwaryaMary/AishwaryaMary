import React from "react";
import { FlatList, Text, ActivityIndicator } from "react-native";
import ProductItem from "../../../atoms/ProductItem/views/ProductItem";
import getProductListStyles from "../styles/ProductList.style";

const ProductList = ({ filteredProducts, loading, error, theme }) => {
  const styles = getProductListStyles(theme);

  if (loading) {
    return <ActivityIndicator size="large" color="#8B5E3C" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  if (filteredProducts?.length > 0) {
    return (
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <ProductItem product={item} theme={theme} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productList}
        columnWrapperStyle={styles.columnWrapper}
      />
    );
  }

  return (
    <Text style={styles.noResultsText}>
      Sorry, we couldn't find what you are looking for.
    </Text>
  );
};

export default ProductList;
