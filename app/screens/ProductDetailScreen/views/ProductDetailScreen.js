import React from "react";
import { ScrollView, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useSelector } from "react-redux";
import { getStyles } from "../styles/ProductDetailScreen.style";
import BackButton from "../../../components/atoms/BackButton/views/BackButton";
import ImageCarousel from "../../../components/atoms/ImageCarousel/views/ImageCarousel";
import ProductDetails from "../../../components/molecules/ProductDetails/views/ProductDetails";
import RelatedProducts from "../../../components/molecules/RelatedProductsList/views/RelatedProducts";

const ProductDetailScreen = () => {
  const params = useLocalSearchParams();
  const { products, theme } = useSelector((state) => state);

  const product = {
    id: params.id,
    title: params.title,
    price: params.price,
    description: params.description,
    category: params.category,
    images: params.images ? JSON.parse(params?.images) : [],
  };

  const relatedProducts = products?.filter(
    (item) =>
      item.category.name === product.category && item.id !== Number(product.id)
  );

  const styles = getStyles(theme);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productInfoContainer}>
        <BackButton theme={theme} />
        <ImageCarousel images={product.images} />
        <ProductDetails
          title={product.title}
          price={product.price}
          description={product.description}
          theme={theme}
        />
      </View>

      {relatedProducts.length > 0 && (
        <RelatedProducts relatedProducts={relatedProducts} theme={theme} />
      )}
    </ScrollView>
  );
};

export default ProductDetailScreen;
