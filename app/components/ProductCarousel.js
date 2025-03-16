import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

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

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ProductCarousel;
