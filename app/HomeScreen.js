import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./redux/actions";

import api from "./utils/api";
import CategoryPill from "./components/CategoryPill";
import ProductItem from "./components/ProductItem";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { products, loading, error, categories } = useSelector(
    (state) => state
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch products and categories from API
  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      dispatch(fetchProductsRequest());
      dispatch(fetchCategoriesRequest());
      try {
        const productsResponse = await api.get("/products");
        dispatch(fetchProductsSuccess(productsResponse?.data));

        const categoriesResponse = await api.get("/categories");
        dispatch(
          fetchCategoriesSuccess(
            categoriesResponse?.data.map((cat) => cat.name)
          )
        );
      } catch (err) {
        dispatch(fetchProductsFailure(err.message));
        dispatch(fetchCategoriesFailure(err.message));
      }
    };

    fetchProductsAndCategories();
  }, [dispatch]);

  // Filter products based on search term and category
  const filteredProducts = products?.filter((product) => {
    return (
      (selectedCategory ? product.category.name === selectedCategory : true) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search products..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      {/* Category Pills */}
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
            />
          )}
        />
      </View>

      {/* Product List */}
      {loading ? (
        <ActivityIndicator size="large" color="#8B5E3C" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : filteredProducts?.length > 0 ? (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              onPress={() =>
                router.push({
                  pathname: "/ProductDetail",
                  params: { product: item },
                })
              }
              style={styles.productItem}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productList}
          columnWrapperStyle={styles.columnWrapper} // Ensures even spacing between columns
        />
      ) : (
        <Text style={styles.noResultsText}>
          Sorry, we couldn't find what you are looking for.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#F5EFE7",
    paddingHorizontal: 16,
  },
  searchBar: {
    height: 40,
    borderColor: "#D2B48C",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
  categoryContainer: {
    gap: 8, // Space between category pills
    paddingVertical: 4, // Reduced padding
    marginBottom: 8,
    flexGrow: 0, // Prevents the container from expanding unnecessarily
  },
  productList: {
    paddingVertical: 12, // Consistent vertical padding
    gap: 12, // Space between rows
  },
  columnWrapper: {
    justifyContent: "space-between", // Even spacing between columns
    gap: 12, // Space between columns
  },
  productItem: {
    flex: 1, // Allow flexible width
    maxWidth: "48%", // Limit width to prevent overflow
  },
  noResultsText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    color: "#8B5E3C",
  },
});

export default HomeScreen;
