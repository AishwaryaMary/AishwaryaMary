import { View } from "react-native";
import AuthConfig from "../auth/AuthConfig";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId: AuthConfig?.CLIENT_ID_WEB, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
  iosClientId: AuthConfig?.CLIENT_ID_IOS, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});

const GoogleSignInButton = () => {
  return (
    <View>
      <GoogleSigninButton />
    </View>
  );
};

export default GoogleSignInButton;
