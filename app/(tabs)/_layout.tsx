import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import colors from "@/constants/colors";
import HomeScreen from ".";

import OrderMedicine1 from "./orders";
import Profile from "./profile";

import Stores from "./stores";

// Import Screens
const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Hide headers for all tabs
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused, color, size }) => {
            let IconComponent;
            let iconName;

            switch (route.name) {
              case "Home":
                IconComponent = AntDesign;
                iconName = "home";
                break;
              case "Stores":
                IconComponent = Entypo;
                iconName = "shop";
                break;
              case "Orders":
                IconComponent = MaterialCommunityIcons;
                iconName = "timer-sand";
                break;
              case "Profile":
                IconComponent = AntDesign;
                iconName = "user";
                break;
              default:
                break;
            }

            return (
              <View
                style={[
                  styles.tabContainer,
                  focused && styles.focusedTabContainer, // Apply focused style dynamically
                ]}
              >
                <IconComponent name={iconName} size={24} color={color} />
                {focused && (
                  <Text
                    style={[
                      styles.tabText,
                      { color: focused ? "white" : "gray" },
                    ]}
                  >
                    {route.name}
                  </Text>
                )}
              </View>
            );
          },
          tabBarLabel: () => null, // Hide static labels
        })}
      >
        {/* Define each tab */}
        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen
          name="Stores"
          component={Stores}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: "white",
          }}
        />
        <Tab.Screen
          name="Orders"
          component={OrderMedicine1}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: "white",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: "white",
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70, // Adequate height for icons and text
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: colors.secondary, // Background for the tab bar
    justifyContent: "center", // Center all contents vertically
  },
  tabContainer: {
    flexDirection: "row", // Align icon and text horizontally
    alignItems: "center", // Center icon and text vertically
    justifyContent: "center", // Center within the tab bar
    borderRadius: 15, // Rounded look for focused tab background
    paddingHorizontal: 15,
    paddingVertical: 10, // Provide extra padding for the icon
    backgroundColor: "transparent", // No background for inactive tabs
    minWidth: 100, // Ensure consistent width
    height: 50, // Add a fixed height to prevent clipping
    marginTop: 20,
  },
  focusedTabContainer: {
    marginTop: 20,
    backgroundColor: colors.primary, // Background for active tab
    minWidth: 120, // Slightly larger width for active tab
    paddingVertical: 10, // Ensure enough space for the icon
    borderRadius: 15, // Keep rounded corners
  },
  tabText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8, // Space between icon and text
  },
});
