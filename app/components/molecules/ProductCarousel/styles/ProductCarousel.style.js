import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
