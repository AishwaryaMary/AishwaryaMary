import React, { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import Login from "./Login";

const WelcomeScreen = () => {
  const router = useRouter();

  // Animation values
  const titleOpacity = useRef(new Animated.Value(0)).current; // For title fade-in
  const buttonPosition = useRef(new Animated.Value(500)).current; // For button slide-up

  // Start the animations when the component mounts
  useEffect(() => {
    Animated.parallel([
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(buttonPosition, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [titleOpacity, buttonPosition]);

  return (
    <View style={styles.container}>
      {/* Title with fade-in effect */}
      <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>
        Welcome to Thrifty
      </Animated.Text>

      {/* Button with slide-up effect */}
      <Animated.View
        style={[
          styles.buttonContainer,
          { transform: [{ translateY: buttonPosition }] },
        ]}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/HomeScreen")}
        >
          <Text style={styles.buttonText}>Get Started →</Text>
        </TouchableOpacity>
        <Login />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5EFE7", // Nude brown background
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#8B5E3C", // Darker brown text
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#D2B48C", // Beige button
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: "#8B5E3C", // Darker brown text
    fontWeight: "600",
  },
});

export default WelcomeScreen;
