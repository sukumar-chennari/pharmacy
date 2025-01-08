import { Tabs } from "expo-router";
import colors from "@/constants/colors";
import { SafeAreaView, StatusBar } from "react-native";
import { Stack } from "expo-router"; // Import Stack for nesting

export default function RootLayout() {
  return (
   
          <Stack  screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="screens/orderMedicine"  />
      <Stack.Screen name="screens/signUpScreen"/>
    </Stack>


  );
}
