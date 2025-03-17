import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import getBackButtonStyles from "../styles/BackButton.style";

const BackButton = ({ theme }) => {
  const router = useRouter();
  const styles = getBackButtonStyles(theme);

  return (
    <TouchableOpacity
      onPress={() => router.push("/screens/HomeScreen/views/HomeScreen")}
      style={styles.backButton}
    >
      <Text style={styles.backText}>← Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
