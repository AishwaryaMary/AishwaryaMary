import React, { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import GoogleSignInButton from "../../../components/atoms/SignIn/GoogleSignInButton";
import styles from "../styles/WelcomeScreen.style";

const WelcomeScreen = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  const titleOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [titleOpacity]);

  useEffect(() => {
    if (user) {
      router.push("/screens/HomeScreen");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>
        Welcome To Thrifty
      </Animated.Text>

      <Animated.View
        style={[styles.buttonContainer, { opacity: titleOpacity }]}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/screens/HomeScreen/views/HomeScreen")}
        >
          <Text style={styles.buttonText}>Continue As A Guest →</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <Text style={styles.buttonText}>or</Text>
        </View>

        <GoogleSignInButton />
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;
