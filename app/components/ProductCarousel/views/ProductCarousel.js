import React from "react";
import { FlatList, Image, View } from "react-native";
import styles from "../styles/ProductCarousel.style";

const ProductCarousel = ({ images }) => {
  return (
    <FlatList
      data={images}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      )}
    />
  );
};

export default ProductCarousel;
