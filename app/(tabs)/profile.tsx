
import StoreName from "@/components/storeName";
import Store from "../../components/store";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import ProductDetails from "@/components/productDetails";

function Profile() {
  return (


      <>
        {/* <Text>This is Profile Screen 1</Text>
        <Link href="/screens/signUpScreen" style={{ marginTop: 20, color: 'blue', fontSize: 16 }}>
          Go To Login
        </Link> */}

        {/* <StoreName/> */}
        <ProductDetails/>
      </>
  );
}

export default Profile;