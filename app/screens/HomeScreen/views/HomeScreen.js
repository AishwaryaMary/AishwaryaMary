import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {
  fetchProductsRequest,
  fetchCategoriesRequest,
  fetchProductsSuccess,
  fetchCategoriesSuccess,
  fetchProductsFailure,
  fetchCategoriesFailure,
  clearUser,
  setTheme,
} from "../../../redux/actions";
import api from "../../../utils/api";
import Header from "../../../components/molecules/Header/views/Header";
import CategoryList from "../../../components/molecules/CategoryList/CategoryList";
import ProductList from "../../../components/molecules/ProductList/views/ProductList";
import SearchBar from "../../../components/atoms/SearchBar/views/SearchBar";
import getStyles from "../styles/HomeScreen.style";

const CACHE_KEY_PRODUCTS = "cached_products";
const CACHE_KEY_CATEGORIES = "cached_categories";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const categories = useSelector((state) => state.categories);
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cyderesMode, setCyderesMode] = useState(theme === "dark");
  const [showDropdown, setShowDropdown] = useState(false);

  const styles = getStyles(theme);

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

        const productsResponse = await api.get("/products");
        const categoriesResponse = await api.get("/categories");

        dispatch(fetchProductsSuccess(productsResponse?.data));
        dispatch(
          fetchCategoriesSuccess(
            categoriesResponse?.data.map((cat) => ca?.name)
          )
        );

        await AsyncStorage.setItem(
          CACHE_KEY_PRODUCTS,
          JSON.stringify(productsResponse?.data)
        );
        await AsyncStorage.setItem(
          CACHE_KEY_CATEGORIES,
          JSON.stringify(categoriesResponse?.data.map((cat) => cat?.name))
        );
      } catch (err) {
        dispatch(fetchProductsFailure(err?.message));
        dispatch(fetchCategoriesFailure(err?.message));
      }
    };

    fetchProductsAndCategories();
  }, [dispatch]);

  const filteredProducts = products?.filter(
    (product) =>
      (selectedCategory
        ? product?.category?.name === selectedCategory
        : true) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(clearUser());
      setShowDropdown(false);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleToggleTheme = () => {
    const newTheme = cyderesMode ? "light" : "dark";
    setCyderesMode(!cyderesMode);
    dispatch(setTheme(newTheme));
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={
            cyderesMode
              ? require("../../../../assets/images/logo_dark.png")
              : require("../../../../assets/images/logo_light.png")
          }
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Header
        cyderesMode={cyderesMode}
        setCyderesMode={setCyderesMode}
        theme={theme}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        user={user}
        handleLogout={handleLogout}
        handleToggleTheme={handleToggleTheme}
        dispatch={dispatch}
        router={router}
      />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        theme={theme}
      />

      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        theme={theme}
      />

      <ProductList
        filteredProducts={filteredProducts}
        loading={loading}
        error={error}
        theme={theme}
      />
    </View>
  );
};

export default HomeScreen;
