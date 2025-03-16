import React from "react";
import { TextInput } from "react-native";
import getStyles from "../styles/SearchBar.style";

const SearchBar = ({ searchTerm, setSearchTerm, theme }) => {
  const styles = getStyles(theme);

  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search products..."
      value={searchTerm}
      onChangeText={setSearchTerm}
    />
  );
};

export default SearchBar;
