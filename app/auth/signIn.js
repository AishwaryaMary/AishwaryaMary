import { Alert } from "react-native";
import {
  GoogleSignin,
  statusCodes,
  isErrorWithCode,
} from "@react-native-google-signin/google-signin";
import { setUser } from "../redux/actions";

export const signIn = async (dispatch, router) => {
  try {
    await GoogleSignin.hasPlayServices();

    const userInfo = await GoogleSignin.signIn();

    dispatch(setUser(userInfo));

    router.push("/screens/HomeScreen/views/HomeScreen");
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          Alert.alert(
            "Login In Progress",
            "A login operation is already in progress."
          );
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          Alert.alert(
            "Google Play Services Error",
            "Google Play services are not available or outdated."
          );
          break;
        default:
          Alert.alert("Error", "An unexpected error occurred during login.");
      }
    } else {
      Alert.alert("Error", "An unknown error occurred during login.");
    }
  }
};
