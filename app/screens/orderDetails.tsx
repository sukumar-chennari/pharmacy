import colors from "@/constants/colors";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function OrderDetails() {
  const order = {
    id: 34,
    date: "Mon, 25 Jan 2025",
    visit: "9:00 AM - 10:00 AM",
    cancel: false,
    status: "Order Verification Pending",
    deliveryDate: "Friday, Jan 25 2025",
    pharmacy: "Medleymed Pharmacy",
    pharmacyAddress:
      "2nd Floor, Unit 203 Gowra Palladium Hitech City, Madhapur, Hyderabad, Telangana 500081",
    customerName: "Chandra Shaker Appalacharyulu",
    customerAddress: "5-1-11-1235 Borabanda, Ameerpet, Hyderabad, Telangana, 500000, India",
    phoneNumber: "+91 9999999999",
    product: {
      name: "OneTouch Select Plus Test Strips, 50 Count",
      mrp: "₹200",
      price: "₹200",
      time: "9:00 AM - 10:00 AM",
      quantity: 2,
    },
    priceDetails: {
      totalMRP: "₹113.4",
      discount: "₹40.0",
      deliveryCharges: "₹50.0",
    },
  };

  return (
    <ScrollView style={styles.container}>
      {/* Order Info Section */}
      <View style={styles.orderInfoContainer}>
        {/* Image Section */}
        <Image
          source={require("../../assets/carousel1.jpg")} // Replace with the actual image
          style={styles.orderImage}
        />
        {/* Info Section */}
        <View style={styles.orderDetails}>
          <Text style={styles.orderInfoText}>Order ID : {order.id}</Text>
          <Text style={styles.orderInfoText}>Order Date : {order.date}</Text>
          <Text style={[styles.orderStatus, { color: "orange" }]}>
            {order.status}
          </Text>
        </View>
      </View>

      {/* Delivery Date Section */}
      <Text style={styles.deliveryDate}>
        Expected delivery by {order.deliveryDate}
      </Text>

      {/* Order Status Tracker */}
      <View style={styles.statusTracker}>
        {["Placed", "Processed", "Shipped", "Delivered"].map((step, index) => (
          <View key={index} style={styles.statusStep}>
            <View
              style={[
                styles.statusCircle,
                index === 0 ? styles.statusActive : styles.statusInactive,
              ]}
            />
            <Text
              style={[
                styles.statusText,
                index === 0 ? styles.statusActiveText : styles.statusInactiveText,
              ]}
            >
              {step}
            </Text>
          </View>
        ))}
      </View>

      {/* Pharmacy Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{order.pharmacy}</Text>
        <Text style={styles.cardText}>{order.pharmacyAddress}</Text>
      </View>

      {/* Delivery Address Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Delivery Address</Text>
        <Text style={styles.cardText}>{order.customerName}</Text>
        <Text style={styles.cardText}>{order.customerAddress}</Text>
        <Text style={styles.cardText}>Phone Number: {order.phoneNumber}</Text>
      </View>

      {/* Product Details Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Product Payment Details</Text>
        <Text style={styles.cardText}>
          1. {order.product.name}
        </Text>
        <Text style={styles.cardText}>
          MRP {order.product.mrp} | Price {order.product.price} | Time {order.product.time}
        </Text>
        <Text style={styles.cardText}>Order Quantity: {order.product.quantity}</Text>

        {/* Price Breakdown */}
        <View style={styles.priceDetails}>
          <Text style={styles.priceRow}>
            Total MRP <Text style={styles.priceValue}>{order.priceDetails.totalMRP}</Text>
          </Text>
          <Text style={styles.priceRow}>
            Discount <Text style={styles.priceValue}>- {order.priceDetails.discount}</Text>
          </Text>
          <Text style={styles.priceRow}>
            Delivery Charges <Text style={styles.priceValue}>{order.priceDetails.deliveryCharges}</Text>
          </Text>
        </View>

        {/* Total Amount */}
        <Text style={styles.totalAmount}>Total: ₹{850.0}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  orderInfoContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: "#ccc", // Placeholder color
  },
  orderDetails: {
    flex: 1,
  },
  orderInfoText: {
    fontSize: 14,
    marginBottom: 4,
  },
  orderStatus: {
    fontSize: 14,
    fontWeight: "bold",
  },
  deliveryDate: {
    fontSize: 14,
    color: "gray",
    marginBottom: 12,
  },
  statusTracker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  statusStep: {
    alignItems: "center",
  },
  statusCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 4,
  },
  statusActive: {
    borderColor: "green",
    backgroundColor: colors.primary,
  },
  statusInactive: {
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  statusText: {
    fontSize: 12,
  },
  statusActiveText: {
    color: "green",
  },
  statusInactiveText: {
    color: "#ccc",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  priceDetails: {
    marginTop: 12,
  },
  priceRow: {
    fontSize: 14,
    color: "gray",
    marginBottom: 4,
  },
  priceValue: {
    fontWeight: "bold",
    color: "#333",
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 12,
  },
});
