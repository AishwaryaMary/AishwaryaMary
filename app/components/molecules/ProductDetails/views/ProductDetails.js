import React from "react";
import { View, Text } from "react-native";
import formatPrice from "../../../../utils/formatPrice";
import getProductInfoStyles from "../styles/ProductDetails.style";

const ProductDetails = ({
  title = "No Title",
  price = 0,
  description = "No Description",
  theme,
}) => {
  const styles = getProductInfoStyles(theme);

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.heading}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{formatPrice(Number(price) || 0)}</Text>
      </View>
      <Text style={styles.description} numberOfLines={7} ellipsizeMode="tail">
        {description}
      </Text>
    </View>
  );
};

export default ProductDetails;
