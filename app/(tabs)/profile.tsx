import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

function Profile() {
  return (
    <SafeAreaView>
      <View>
        <Text>This is Profile Screen</Text>
        <Link href="/screens/signUpScreen" style={{ marginTop: 20, color: 'blue', fontSize: 16 }}>
          Go To Login
        </Link>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
