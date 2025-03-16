import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSelector } from "react-redux";
import ProductCarousel from "../components/ProductCarousel";
import { formatPrice } from "../utils/formatPrice";
import api from "../utils/api";

const ProductDetailScreen = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { products } = useSelector((state) => state);

  const product = {
    id: params.id,
    title: params.title,
    price: params.price,
    description: params.description,
    category: params.category,
    images: params.images ? JSON.parse(params?.images) : [],
  };

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products?.length) {
      const filteredProducts = products.filter(
        (item) =>
          item.category.name === product.category &&
          item.id !== Number(product.id)
      );
      setRelatedProducts(filteredProducts);
    }
  }, [products, product.category, product.id]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productInfoContainer}>
        <TouchableOpacity
          onPress={() => router.push("/screens/HomeScreen")}
          style={styles.backButton}
        >
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.carouselContainer}>
          <ProductCarousel images={product.images} />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.heading}>
            <Text style={styles.title}>{product?.title}</Text>
            <Text style={styles.price}>
              {formatPrice(Number(product?.price))}
            </Text>
          </View>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
      </View>

      {relatedProducts.length > 0 && (
        <View style={styles.relatedProductsContainer}>
          <Text style={styles.relatedTitle}>Related Products</Text>
          <FlatList
            data={relatedProducts}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.relatedItem}
                onPress={() =>
                  router.push({
                    pathname: "/screens/ProductDetailScreen",
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
                  source={{ uri: item.images[0] }}
                  style={styles.relatedImage}
                />
                <Text style={styles.relatedText}>{item.title}</Text>
                <Text style={styles.relatedPrice}>
                  {formatPrice(Number(item.price))}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EFE7",
    paddingTop: "15%",
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 16,
    marginLeft: 16,
    borderRadius: 8,
    backgroundColor: "#D2B48C",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  backText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  carouselContainer: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    paddingHorizontal: "3%",
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#8B5E3C",
    marginBottom: 8,
    width: "80%",
  },
  price: {
    fontSize: 20,
    color: "#800000",
    marginBottom: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#6E4B27",
    lineHeight: 24,
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  relatedProductsContainer: {
    marginTop: 5,
    paddingLeft: 16,
  },

  relatedTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8B5E3C",
    marginBottom: 12,
  },
  relatedItem: {
    width: 150,
    marginRight: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  relatedImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  relatedText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#8B5E3C",
    height: 40,
  },
  relatedPrice: {
    fontSize: 14,
    color: "#800000",
    fontWeight: "bold",
  },
  productInfoContainer: {
    height: 600,
  },
});

export default ProductDetailScreen;
