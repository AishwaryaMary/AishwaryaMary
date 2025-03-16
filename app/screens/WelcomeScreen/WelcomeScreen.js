import React, { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import GoogleSignInButton from "../../components/SignIn/GoogleSignInButton";

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
          onPress={() => router.push("/screens/HomeScreen/HomeScreen")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5EFE7",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#8B5E3C",
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#D2B48C",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: "#8B5E3C",
    fontWeight: "600",
  },
  orContainer: {
    alignItems: "center",
    paddingVertical: 12,
  },
});

export default WelcomeScreen;
