import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  clearUser,
} from "../redux/actions";

import api from "../utils/api";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import CategoryPill from "../components/CategoryPill";
import ProductItem from "../components/ProductItem";
import { signIn } from "../auth/signIn";

const CACHE_KEY_PRODUCTS = "cached_products";
const CACHE_KEY_CATEGORIES = "cached_categories";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { products, loading, error, categories, user } = useSelector(
    (state) => state
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      dispatch(fetchProductsRequest());
      dispatch(fetchCategoriesRequest());

      try {
        const cachedProducts = await AsyncStorage.getItem(CACHE_KEY_PRODUCTS);
        const cachedCategories = await AsyncStorage.getItem(
          CACHE_KEY_CATEGORIES
        );

        if (cachedProducts && cachedCategories) {
          dispatch(fetchProductsSuccess(JSON.parse(cachedProducts)));
          dispatch(fetchCategoriesSuccess(JSON.parse(cachedCategories)));
          return;
        }

        // Fallback to network request if cache is empty
        const productsResponse = await api.get("/products");
        const categoriesResponse = await api.get("/categories");

        dispatch(fetchProductsSuccess(productsResponse?.data));
        dispatch(
          fetchCategoriesSuccess(
            categoriesResponse?.data.map((cat) => cat.name)
          )
        );

        await AsyncStorage.setItem(
          CACHE_KEY_PRODUCTS,
          JSON.stringify(productsResponse?.data)
        );
        await AsyncStorage.setItem(
          CACHE_KEY_CATEGORIES,
          JSON.stringify(categoriesResponse?.data.map((cat) => cat.name))
        );
      } catch (err) {
        dispatch(fetchProductsFailure(err.message));
        dispatch(fetchCategoriesFailure(err.message));
      }
    };

    fetchProductsAndCategories();
  }, [dispatch]);

  const filteredProducts = products?.filter((product) => {
    return (
      (selectedCategory ? product.category.name === selectedCategory : true) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleLogout = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(clearUser());
    } catch (error) {
      console.log("Error signing out", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {user?.data?.user?.name ? (
          <>
            <Text style={styles.userText}>
              Logged in as {user?.data?.user?.name}
            </Text>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => signIn(dispatch, router)}
          >
            <Text style={styles.loginText}>Sign in with Google</Text>
          </TouchableOpacity>
        )}
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Search products..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

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
                  pathname: "/screens/ProductDetailScreen",
                  params: { product: item },
                })
              }
              style={styles.productItem}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productList}
          columnWrapperStyle={styles.columnWrapper}
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
    paddingTop: 60,
    backgroundColor: "#F5EFE7",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
  },
  userText: {
    fontSize: 16,
    color: "#8B5E3C",
    fontWeight: "500",
  },
  logoutButton: {
    backgroundColor: "#D2B48C",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  logoutText: {
    color: "#8B5E3C",
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#D2B48C",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  loginText: {
    color: "#8B5E3C",
    fontWeight: "600",
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
    paddingVertical: 4,
    marginBottom: 8,
  },
  productList: {
    paddingVertical: 12,
    gap: 12,
  },
  columnWrapper: {
    justifyContent: "space-between",
    gap: 12,
  },
  productItem: {
    flex: 1,
    maxWidth: "48%",
  },
  noResultsText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    color: "#8B5E3C",
  },
});

export default HomeScreen;
