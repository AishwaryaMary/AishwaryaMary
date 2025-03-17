import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SignInAuth from "../../../../auth/SignInAuth";
import getHeaderStyles from "../styles/Header.style";
import COLORS from "../../../../utils/colors";

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
  const colors = theme === "dark" ? COLORS.dark : COLORS.light;

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
      <View style={styles.userNameContainer}>
        <View>
          <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
            <MaterialIcons
              name="account-circle"
              size={32}
              color={colors?.text}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.userName}>
            {user?.data?.user?.name ?? "Guest"}
          </Text>
        </View>
      </View>

      {showDropdown && (
        <View style={styles.dropdown}>
          {user?.data?.user?.name ? (
            <>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.dropdownActionText}>Log out</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity onPress={() => SignInAuth(dispatch, router)}>
              <Text style={styles.dropdownActionText}>Sign in with Google</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Header;
