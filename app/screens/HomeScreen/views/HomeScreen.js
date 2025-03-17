import React, { useState } from "react";
import { View, Image } from "react-native";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useRouter } from "expo-router";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { clearUser, setTheme } from "../../../redux/actions";
import Header from "../../../components/molecules/Header/views/Header";
import CategoryList from "../../../components/molecules/CategoryList/CategoryList";
import ProductList from "../../../components/molecules/ProductList/views/ProductList";
import SearchBar from "../../../components/atoms/SearchBar/views/SearchBar";
import getStyles from "../styles/HomeScreen.style";
import useProducts from "../../../../hooks/useProducts";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { products, loading, error, categories, user, theme } = useSelector(
    (state) => ({
      products: state.products,
      loading: state.loading,
      error: state.error,
      categories: state.categories,
      user: state.user,
      theme: state.theme,
    }),
    shallowEqual
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useProducts();

  const filteredProducts = products?.filter(
    (product) =>
      (selectedCategory
        ? product?.category?.name === selectedCategory
        : true) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = getStyles(theme);

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
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(setTheme(newTheme));
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={
            theme === "dark"
              ? require("../../../../assets/images/logo_dark.png")
              : require("../../../../assets/images/logo_light.png")
          }
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Header
        cyderesMode={theme === "dark"}
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
