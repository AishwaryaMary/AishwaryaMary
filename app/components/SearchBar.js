import React from "react";
import { TextInput, StyleSheet } from "react-native";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search products..."
      value={searchTerm}
      onChangeText={setSearchTerm}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: "#D2B48C",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },
});

export default SearchBar;
