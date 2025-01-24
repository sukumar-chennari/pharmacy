import React, { useState } from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Title from "./text";

import colors from "@/constants/colors"; // Assuming you have the colors object in your constants file

export default function AddressList() {
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null); // Track selected address

  const addresses = [
    {
      name: "Athena GT",
      doorNo: "5-1-11-1235",
      street: "Borabanda, Ameerpet, Hyderabad",
      state: "Telangana",
      pincode: "500000",
      mobile: "9999999999",
    },
    {
      name: "Athena GT",
      doorNo: "5-1-11-1235",
      street: "Borabanda, Ameerpet, Hyderabad",
      state: "Telangana",
      pincode: "500000",
      mobile: "9999999999",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {addresses.map((address, index) => (
        <View key={index} style={styles.addressSection}>
          {/* Make it Default Section */}
          <TouchableOpacity
            style={[
              styles.defaultAddressContainer,
              selectedAddress === index
                ? styles.selectedDefaultAddress
                : styles.unselectedDefaultAddress,
            ]}
            onPress={() => setSelectedAddress(index)} // Update the selected address
          >
            <View style={styles.leftSideContainer}>
              <Title
                text="MAKE IT DEFAULT ADDRESS"
                style={[
                  styles.defaultAddressText,
                  selectedAddress === index && styles.selectedText,
                ]}
              />
            </View>
            <View
              style={[
                styles.outerCircle,
                selectedAddress === index && styles.selectedCircle,
              ]}
            >
              {selectedAddress === index && <View style={styles.innerCircle} />}
            </View>
          </TouchableOpacity>

          {/* Address Details */}
          <View style={styles.detailsContainer}>
            <Title text={`${address.name}`} style={styles.deatiledTitleText} />
            <Title text={`${address.doorNo}`} style={styles.detailText} />
            <Title text={`${address.street}`} style={styles.detailText} />
            <Title text={`${address.state}`} style={styles.detailText} />
            <Title text={`${address.pincode}`} style={styles.detailText} />
            <Title text={`Mobile: ${address.mobile}`} style={styles.detailText} />
          </View>

          {/* Buttons for Edit and Remove */}
          <View style={styles.buttonContainer}>
            {/* Edit Button */}
            <TouchableOpacity style={styles.button} onPress={() => console.log("Edit Address")}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>

            {/* Remove Button */}
            <TouchableOpacity style={styles.button} onPress={() => console.log("Remove Address")}>
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flexGrow: 1,
  },
  addressSection: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  defaultAddressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Ensure the items are spaced out on the left and right
    marginBottom: 16,
    height: 60, // Ensure this is tall enough for proper vertical centering
    paddingHorizontal: 8, // Reduced internal padding
    backgroundColor: "#f1f1f1", // Background color for visibility
    borderRadius: 8, // Rounded corners for the container
    alignSelf: "stretch", // Ensures it stretches across the width
  },
  unselectedDefaultAddress: {
    backgroundColor: "#f1f1f1", // Gray background when not selected
  },
  selectedDefaultAddress: {
    backgroundColor: colors.secondary, // Primary color when selected
  },
  leftSideContainer: {
    flex: 1, // Take available space for the text
    justifyContent: "center", // Vertically centers the text
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc", // Default border color
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCircle: {
    borderColor: colors.primary, // Border color for selected circle
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary, // Inner circle color for selected state
  },
  defaultAddressText: {
    fontSize: 16,
    color: "#555", // Default gray text color
    textAlign: "left", // Align text to the left
    paddingRight: 8, // Minimal space between the text and circle
  },
  selectedText: {
    color: colors.primary, // White text color when selected
  },
  detailsContainer: {
    marginBottom: 16,
  },
  deatiledTitleText: {
    fontSize: 18,
    marginBottom: 4,
  },
  detailText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#fff", // White background for buttons
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "gray", // Gray text color for buttons
    textAlign: "center",
    fontSize: 14,
  },
});
