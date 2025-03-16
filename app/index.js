import { Redirect } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-react";
import Login from "./screens/Login";

const VITE_CLERK_PUBLISHABLE_KEY =
  "pk_test_bWFpbi1pbXAtODMuY2xlcmsuYWNjb3VudHMuZGV2JA";

export default function Index() {
  return (
    // <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY}>
    //   <Login />
    <Redirect href="/screens/WelcomeScreen" />
    // </ClerkProvider>
  );
}
