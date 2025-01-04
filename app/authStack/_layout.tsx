// app/auth/_layout.tsx
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="/signUpScreen" options={{ title: "Login" }} />
      <Stack.Screen name="verifyPasswordScreen" options={{ title: "Verify Password" }} />
      <Stack.Screen name="newPasswordScreen" options={{ title: "Create Password" }} />
      <Stack.Screen name="forgotPasswordScreen" options={{ title: "Forgot aPassword" }} />
    </Stack>
  );
}
