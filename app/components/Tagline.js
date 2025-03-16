import React, { useEffect, useRef } from "react";
import { Animated, Text, StyleSheet } from "react-native";

const Tagline = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.Text style={[styles.tagline, { opacity: fadeAnim }]}>
      Welcome to Thrifty
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  tagline: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#8B5E3C", // Dark brown text
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Tagline;
