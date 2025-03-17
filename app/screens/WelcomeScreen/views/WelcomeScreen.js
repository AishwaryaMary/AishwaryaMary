import React, { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { View, Text, TouchableOpacity, Animated, Image } from "react-native";
import GoogleSignInButton from "../../../components/atoms/SignIn/GoogleSignInButton";
import styles from "../styles/WelcomeScreen.style";

const WelcomeScreen = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoTranslateY = useRef(new Animated.Value(20)).current;
  const buttonsOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(logoTranslateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.timing(buttonsOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    });
  }, []);

  useEffect(() => {
    if (user) {
      router.push("/screens/HomeScreen");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../../../assets/images/logo_light.png")}
        style={[
          {
            opacity: logoOpacity,
            transform: [{ translateY: logoTranslateY }],
          },
        ]}
        resizeMode="contain"
      />

      <Animated.View
        style={[styles.buttonContainer, { opacity: buttonsOpacity }]}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/screens/HomeScreen/views/HomeScreen")}
        >
          <Text style={styles.buttonText}>Continue As A Guest →</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <Text style={styles.buttonTextOr}>-- or --</Text>
        </View>

        <GoogleSignInButton />
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;
