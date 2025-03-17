import React from "react";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import getRelatedProductsStyles from "../styles/RelatedProducts.style";
import formatPrice from "../../../../utils/formatPrice";

const RelatedProducts = ({ relatedProducts, theme }) => {
  const router = useRouter();
  const styles = getRelatedProductsStyles(theme);

  return (
    <View style={styles.relatedProductsContainer}>
      <Text style={styles.relatedTitle}>Related Products</Text>
      <FlatList
        data={relatedProducts}
        horizontal
        keyExtractor={(item) => item?.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.relatedItem}
            onPress={() =>
              router.push({
                pathname:
                  "/screens/ProductDetailScreen/views/ProductDetailScreen",
                params: {
                  id: item?.id,
                  title: item?.title,
                  price: item?.price,
                  description: item?.description,
                  category: item?.category?.name,
                  images: JSON.stringify(item?.images),
                },
              })
            }
          >
            <Image
              source={{ uri: item?.images?.[0] }}
              style={styles.relatedImage}
            />
            <Text style={styles.relatedText}>{item?.title}</Text>
            <Text style={styles.relatedPrice}>
              {formatPrice(Number(item?.price))}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RelatedProducts;
