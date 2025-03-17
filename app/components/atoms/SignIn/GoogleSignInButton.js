import { View } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import AuthConfig from "../../../auth/AuthConfig";
import SignInAuth from "../../../auth/SignInAuth";

GoogleSignin.configure({
  webClientId: AuthConfig?.CLIENT_ID_WEB,
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  offlineAccess: true,
  forceCodeForRefreshToken: false,
  iosClientId: AuthConfig?.CLIENT_ID_IOS,
});

const GoogleSignInButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <View>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => SignInAuth(dispatch, router)}
      />
    </View>
  );
};

export default GoogleSignInButton;
