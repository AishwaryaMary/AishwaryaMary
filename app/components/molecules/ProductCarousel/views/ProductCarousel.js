import React from "react";
import { FlatList, Image, View } from "react-native";
import styles from "../styles/ProductCarousel.style";
import { DEFAULT_IMAGE } from "../../../../utils/constants";

const ProductCarousel = ({ images }) => {
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: item || DEFAULT_IMAGE }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => `${item}-${index}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      initialNumToRender={3}
      maxToRenderPerBatch={3}
      windowSize={5}
      removeClippedSubviews={true}
    />
  );
};

export default ProductCarousel;
