import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import VerifyPasswordScreen from "./screens/verifyPasswordScreen";
import TabsNavigator from "./(tabs)/_layout";
import colors from "@/constants/colors";
import StoreName from "./screens/storeName";
import OrderMedicine from "./screens/orderMedicine";
import ProductDetails from "./screens/productDetails";

import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CartDetails from "./screens/cartDetails";
import MakeAddress from "./screens/makeAddress";
import AddNewAddress from "./screens/addNewAddress";
import DeliveryScreen from "./screens/deliveryScreen";
import OrderDetails from "./screens/orderDetails";
import SignInScreen from "./screens/signInScreen";
import SignUpScreen from "./screens/signUpScreen";

const Stack = createStackNavigator();

export default function App() {
  const [cartCount, setCartCount] = useState(3); // Example initial cart count

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      >
        {/* Tab Navigator */}
        <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />

        {/* Additional Screens */}
        <Stack.Screen
          name="VerifyPasswordScreen"
          component={VerifyPasswordScreen}
          options={{
            title: "Verify Password",
          }}
        />

        <Stack.Screen
          name="DetailedStore"
          component={StoreName}
          options={({ navigation }) => ({
            title: "Store Name",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("cartDetails")}
                style={{ marginRight: 15 }}
              >
                <View>
                  <Ionicons name="cart" size={24} color="white" />
                  {cartCount > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{cartCount}</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="OrderMedicine"
          component={OrderMedicine}
          options={{
            title: "Order Medicine",
          }}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            title: "Product Details",
          }}
        />

        <Stack.Screen
          name="cartDetails"
          component={CartDetails}
          options={{
            title: "Cart Details",
          }}
        />

<Stack.Screen
          name="MakeAddress"
          component={MakeAddress}
          options={{
            title: "Location",
          }}
        />

<Stack.Screen
          name="AddNewAddress"
          component={AddNewAddress}
          options={{
            title: "Add Address",
          }}
        />

<Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={{
            title: "Add Address",
            headerShown:false
          }}
        />


<Stack.Screen
          name="orderDetails"
          component={OrderDetails}
          options={{
            title: "Oder Details",
            headerShown:true
          }}
        />

<Stack.Screen
          name="signIn"
          component={SignInScreen}
          options={{
           
            headerShown:false
          }}
        />

        
<Stack.Screen
          name="signUp"
          component={SignUpScreen}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>

      



    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -5,
    top: -5,
    backgroundColor: "red",
    borderRadius: 10,
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
