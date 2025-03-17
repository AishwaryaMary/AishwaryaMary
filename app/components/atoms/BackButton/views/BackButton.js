import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import getBackButtonStyles from "../styles/BackButton.style";
import ROUTES from "../../../../utils/constants";

const BackButton = ({ theme }) => {
  const router = useRouter();
  const styles = getBackButtonStyles(theme);
  const handlePress = () => router.push(ROUTES.home);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.backButton}>
      <Text style={styles.backText}>← Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
