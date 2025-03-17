import React from "react";
import { View, Text } from "react-native";
import formatPrice from "../../../../utils/formatPrice";
import getProductInfoStyles from "../styles/ProductDetails.style";

const ProductDetails = ({ title, price, description, theme }) => {
  const styles = getProductInfoStyles(theme);

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.heading}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{formatPrice(Number(price))}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default ProductDetails;
