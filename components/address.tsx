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
        <Text style={[styles.text,{fontSize:18}]}>Add Address</Text>
        <Ionicons name='arrow-down' size={22} color={'white'}/>
        </View>
        <Text style={[styles.opaqueText]}>Banjara Hills 500072</Text>
        
      </View>
      {/* <Search /> */}
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
    // flexDirection: "row",
    justifyContent: "space-between", // Align location and bell icons to the ends
    // alignItems: "center", // Aligns items vertically
    marginTop: 20,
    paddingTop:50,
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
  opaqueText:{
    color:'white',
    opacity:0.8,
    fontSize:16
  }
});
