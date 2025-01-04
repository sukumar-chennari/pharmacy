import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/constants/colors";
import Search from "./search";

function Address() {
  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <View style={styles.locationInfo}>
          <Ionicons name="location-outline" size={24} color="white" />
          <Text style={styles.text}>Add Current Location</Text>
        </View>
        <Ionicons name="notifications-outline" size={32} color="white" />
      </View>
      <Search />
    </View>
  );
}

export default Address;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 150,
    paddingHorizontal: 20, // Padding for inner content
    justifyContent: "space-between", // Ensures proper spacing between address and search
    paddingBottom: 10, // Adds spacing for the search bar
  },
  addressContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Align location and bell icons to the ends
    alignItems: "center", // Aligns items vertically
    marginTop: 20,
    paddingTop:40,
    gap:8
  },
  locationInfo: {
    flexDirection: "row",
    alignItems: "center", // Aligns icon and text
    gap: 10, // Space between icon and text
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
