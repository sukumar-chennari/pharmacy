import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const isAuthenticated = false; // Replace with real authentication logic

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="home/index" // Set home as the initial tab screen
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="home/index" // This should correspond to the "home/index.tsx" file
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home", // Set the label for the Home tab
        }}
      />
      <Tabs.Screen
        name="cart/index" // This should correspond to the "cart/index.tsx" file
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shop" size={size} color={color} />
          ),
          headerTitle: "Shop",
          tabBarLabel: "Cart", // Set the label for the Cart tab
        }}
      />
      <Tabs.Screen
        name="orders/index" // This should correspond to the "orders/index.tsx" file
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="timer-sand"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Orders", // Set the label for the Orders tab
        }}
      />
      <Tabs.Screen
        name="profile/index" // This should correspond to the "profile/index.tsx" file
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          tabBarLabel: "Profile", // Set the label for the Profile tab
        }}
      />
    </Tabs>
  );
}
