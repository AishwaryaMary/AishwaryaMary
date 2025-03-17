import { Alert } from "react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { setUser } from "../redux/actions";
import ROUTES from "../utils/constants";

const SignIn = async (dispatch, router) => {
  try {
    await GoogleSignin.hasPlayServices();

    const userInfo = await GoogleSignin.signIn();

    if (!userInfo) {
      Alert.alert("Error", "Failed to retrieve user information.");
      return;
    }

    dispatch(setUser(userInfo));

    router.push(ROUTES?.home);
  } catch (error) {
    let errorMessage = "An unexpected error occurred during login.";

    if (error?.code) {
      errorMessage =
        error.code === statusCodes.IN_PROGRESS
          ? "A login operation is already in progress."
          : error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
          ? "Google Play services are not available or outdated."
          : errorMessage;
    }

    Alert.alert("Error", errorMessage);
  }
};

export default SignIn;
