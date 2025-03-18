import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import getImageCarouselStyle from "../styles/ImageCarousel.style";

const ImageCarousel = ({ images, theme }) => {
  const styles = getImageCarouselStyle(theme);

  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <View style={styles.carouselContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageWrapper}>
            {hasError ? (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Image Not Available</Text>
              </View>
            ) : (
              <Image
                source={{ uri: image }}
                style={styles.image}
                onError={handleImageError}
              />
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ImageCarousel;
