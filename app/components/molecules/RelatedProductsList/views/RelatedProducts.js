import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import getRelatedProductsStyles from "../styles/RelatedProducts.style";
import formatPrice from "../../../../utils/formatPrice";
import ROUTES from "../../../../utils/constants";

const RelatedProducts = ({ relatedProducts = [], theme }) => {
  const router = useRouter();
  const styles = getRelatedProductsStyles(theme);
  const [imageStatus, setImageStatus] = useState({});

  const handlePress = (item) => {
    router.push({
      pathname: ROUTES?.productDetails,
      params: {
        id: item?.id,
        title: item?.title,
        price: item?.price,
        description: item?.description,
        category: item?.category?.name,
        images: JSON.stringify(item?.images),
      },
    });
  };

  const handleImageError = (productId) => {
    setImageStatus((prevStatus) => ({
      ...prevStatus,
      [productId]: false,
    }));
  };

  const renderItem = ({ item }) => {
    const productId = item?.id;
    const isValidImage = imageStatus[productId] !== false;

    return (
      <TouchableOpacity
        style={styles.relatedItem}
        onPress={() => handlePress(item)}
      >
        {isValidImage ? (
          <Image
            source={{ uri: item?.images?.[0] }}
            style={styles.relatedImage}
            resizeMode="cover"
            onError={() => handleImageError(productId)}
          />
        ) : (
          <View style={styles.relatedItemAlt}>
            <Text style={styles.imageAlt} numberOfLines={1}>
              {"Image Not Available"}
            </Text>
          </View>
        )}

        <Text style={styles.relatedText} numberOfLines={1}>
          {item?.title || "No Title"}
        </Text>
        <Text style={styles.relatedPrice}>
          {item?.price ? formatPrice(Number(item?.price)) : "Price Unavailable"}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.relatedProductsContainer}>
      <Text style={styles.relatedTitle}>Related Products</Text>
      <FlatList
        data={relatedProducts}
        keyExtractor={(item) => item?.id?.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        initialNumToRender={4}
        maxToRenderPerBatch={6}
        windowSize={5}
        removeClippedSubviews
      />
    </View>
  );
};

export default RelatedProducts;
