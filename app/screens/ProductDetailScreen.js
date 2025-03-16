import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useRouter } from "expo-router";
import ProductCarousel from "../components/ProductCarousel";
import { formatPrice } from "../utils/formatPrice";

const ProductDetailScreen = () => {
  const { router } = useRouter(); // Accessing the params passed from ProductItem
  //   const { product } = params || {};
  console.log("aish product>>", router);
  return (
    <View style={styles.container}>
      {/* <ProductCarousel images={product.images} /> */}
      {/* <Text style={styles.title}>{product?.title}</Text>
      <Text style={styles.price}>{formatPrice(product?.price)}</Text>
      <Text style={styles.description}>{product?.description}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5EFE7", // Nude brown background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8B5E3C",
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: "#8B5E3C",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#6E4B27",
  },
});

export default ProductDetailScreen;
