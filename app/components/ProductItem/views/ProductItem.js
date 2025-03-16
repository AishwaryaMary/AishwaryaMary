import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { formatPrice } from "../../../utils/formatPrice";
import getStyles from "../styles/ProductItem.style";

const ProductItem = ({ product, theme }) => {
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        router.push({
          pathname: "/screens/ProductDetailScreen/ProductDetailScreen",
          params: {
            id: product?.id,
            title: product?.title,
            price: product?.price?.toString(),
            description: product?.description,
            category: product?.category?.name,
            images: JSON.stringify(product?.images),
          },
        })
      }
    >
      <View style={styles.imageContainer}>
        {product.images?.[0] ? (
          <Image
            source={{ uri: product?.images?.[0] }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Text style={styles.imageAlt}>Image Not Available</Text>
        )}
      </View>
      <Text style={styles.title}>{product?.title}</Text>
      <Text style={styles.price}>
        {product?.price ? formatPrice(product?.price) : "No price available"}
      </Text>
      <Text style={styles.category}>
        {product?.category?.name || "No category"}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductItem;
