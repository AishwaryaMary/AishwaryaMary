import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { signIn } from "../../../../auth/signIn";
import { getHeaderStyles } from "../styles/Header.style";

const Header = ({
  cyderesMode,
  theme,
  showDropdown,
  setShowDropdown,
  user,
  handleLogout,
  handleToggleTheme,
  dispatch,
  router,
}) => {
  const styles = getHeaderStyles(theme);

  return (
    <View style={styles.header}>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>
          {cyderesMode ? "Cyderes Mode Enabled" : "Enter Cyderes Mode"}
        </Text>
        <Switch
          value={cyderesMode}
          onValueChange={handleToggleTheme}
          trackColor={{ false: "#D2B48C", true: "#1F1F1F" }}
          thumbColor={cyderesMode ? "#FFFFFF" : "#8B5E3C"}
        />
      </View>

      <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
        <MaterialIcons
          name="account-circle"
          size={32}
          color={theme === "dark" ? "#FFFFFF" : "#8B5E3C"}
        />
      </TouchableOpacity>

      {showDropdown && (
        <View style={styles.dropdown}>
          {user?.data?.user?.name ? (
            <>
              <Text style={styles.dropdownText}>
                Logged in as {user?.data?.user?.name}
              </Text>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.dropdownActionText}>Log out</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity onPress={() => signIn(dispatch, router)}>
              <Text style={styles.dropdownActionText}>Sign in with Google</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Header;
