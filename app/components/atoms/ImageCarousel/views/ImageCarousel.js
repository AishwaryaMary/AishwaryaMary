import React from "react";
import { Image, ScrollView, View } from "react-native";
import styles from "../styles/ImageCarousel.style";

const ImageCarousel = ({ images }) => {
  return (
    <View style={styles.carouselContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ImageCarousel;
