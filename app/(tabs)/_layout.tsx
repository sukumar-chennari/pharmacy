import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "@/constants/colors";

export default function _layout() {
  const screenWidth = Dimensions.get("window").width;

  return (
    <Tabs
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;
          let iconName;

          switch (route.name) {
            case "index":
              IconComponent = AntDesign;
              iconName = "home";
              break;
            case "cart":
              IconComponent = Entypo;
              iconName = "shop";
              break;
            case "orders":
              IconComponent = MaterialCommunityIcons;
              iconName = "timer-sand";
              break;
            case "profile":
              IconComponent = AntDesign;
              iconName = "user";
              break;
          }

          return (
            <View
              style={[
                styles.tabContainer,
                focused && {
                  backgroundColor: getTabColor(route.name),
                  width: screenWidth / 4, // Occupies 1/3 of the screen for focused tab
                },
              ]}
            >
              <IconComponent name={iconName} size={size} color={color} />
              {focused && (
                <Text
                  style={[styles.tabText, { color: focused ? "white" : "gray" }]}
                >
                  {getTabLabel(route.name)}
                </Text>
              )}
            </View>
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarLabel: () => null, // Prevent static tab bar labels
      })}
    >
      <Tabs.Screen name="index" options={{ tabBarLabel: "" }} />
      <Tabs.Screen name="cart" options={{ tabBarLabel: "" }} />
      <Tabs.Screen name="orders" options={{ tabBarLabel: "" }} />
      <Tabs.Screen name="profile" options={{ tabBarLabel: "" }} />
    </Tabs>
  );
}

/**
 * Get the background color for the focused tab
 * @param {string} routeName
 * @returns {string}
 */
function getTabColor(routeName) {
  switch (routeName) {

    default:
      return colors.primary;
  }
}

/**
 * Get the label for each tab
 * @param {string} routeName
 * @returns {string}
 */
function getTabLabel(routeName) {
  switch (routeName) {
    case "index":
      return "Home";
    case "cart":
      return "Cart";
    case "orders":
      return "Orders";
    case "profile":
      return "Profile";
    default:
      return "";
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.secondary,
    height: 60,
    paddingHorizontal: 10,
  },
  tabBarItemStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "transparent",
    maxWidth: 120, // Limit max width to ensure alignment
  },
  tabText: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: "bold",
  },
});
