import React from "react";
import { Image, View, StyleSheet, Button, ScrollView } from "react-native";
import Title from "./text";
import colors from "@/constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function OrderList() {
  const navigation=useNavigation()
  const orderList = [
    {
      id: 34,
      date: "Mon, 25 Jan 2025",
      visit: "2025-01-25 | 9:00 AM - 10:00 AM",
      cancel: false,
    },
    {
      id: 35,
      date: "Tue, 26 Jan 2025",
      visit: "2025-01-26 | 10:00 AM - 11:00 AM",
      cancel: true,
      image: require("../assets/carousel1.jpg"),
    },
    {
      id: 36,
      date: "Wed, 27 Jan 2025",
      visit: "2025-01-27 | 11:00 AM - 12:00 PM",
      cancel: false,
      image: require("../assets/carousel1.jpg"),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {orderList.map((orderItem, index) => (
        <View key={index} style={styles.orderItem}>
          {/* Image and Order Details Section (Row) */}
          <View style={styles.rowContainer}>
            <View style={styles.imageContainer}>
              {orderItem.image && (
                <Image source={orderItem.image} style={styles.image} />
              )}
            </View>

            <View style={styles.detailsContainer}>
              <Title text={`Order ID: ${orderItem.id}`} style={styles.title} />
              <Title text={`Order Date: ${orderItem.date}`} style={styles.title} />
              <Title text={`Center Visit: ${orderItem.visit}`} style={styles.title} />
              <Title
                text={orderItem.cancel ? "Cancelled" : "Order Verification Pending"}
                style={[
                  styles.title,
                  orderItem.cancel ? { color: "red" } : { color: "#BA8E23" },
                ]}
              />
            </View>
          </View>

          {/* Divider Line */}
          <View style={styles.divider} />

          {/* Button Section */}
          <View style={styles.buttonContainer}>
            <Button
              title="View Order Details"
              color={colors.primary}
              onPress={() => {
                navigation.navigate('orderDetails');
              }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 30, // Make sure button is not cut off at the bottom
  },
  orderItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    padding: 10,
    width: "100%", // Ensure order item takes full width
  },
  rowContainer: {
    flexDirection: "row", // Image and details in a row
    alignItems: "center",
    marginBottom: 10, // Some spacing between content and divider
  },
  imageContainer: {
    width: "25%", // Limit the width of the image section
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10, // Space between image and details
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1, // Allow details to take remaining space
  },
  title: {
    marginBottom: 4,
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc", // Gray divider
    marginVertical: 10,
    width: "100%", // Full width divider
  },
  buttonContainer: {
    width: "100%", // Ensure the button takes full width
  },
});
