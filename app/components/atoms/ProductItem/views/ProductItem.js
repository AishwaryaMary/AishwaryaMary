import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import formatPrice from "../../../../utils/formatPrice";
import getStyles from "../styles/ProductItem.style";
import ROUTES from "../../../../utils/constants";

const ProductItem = ({ product, theme }) => {
  const { id, title, price, description, category, images } = product || {};
  const [isValidImage, setIsValidImage] = useState(true);

  const styles = getStyles(theme);

  const handleImageError = () => {
    setIsValidImage(false);
  };

  const handlePress = () => {
    router.push({
      pathname: ROUTES.productDetails,
      params: {
        id,
        title,
        price: price?.toString(),
        description,
        category: category?.name,
        images: JSON.stringify(images),
      },
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.imageContainer}>
        {isValidImage ? (
          <Image
            source={{ uri: images?.[0] }}
            style={styles.image}
            resizeMode="cover"
            onError={handleImageError}
          />
        ) : (
          <Text style={styles.imageAlt}>Image Not Available</Text>
        )}
      </View>
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {title || "No title"}
      </Text>
      <Text style={styles.price}>
        {price ? formatPrice(price) : "No price available"}
      </Text>
      <Text style={styles.category}>{category?.name || "No category"}</Text>
    </TouchableOpacity>
  );
};

export default ProductItem;
