import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Button, ScrollView } from "react-native";
import Title from "./text";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "@/constants/colors";

export default function CartDetails() {
  const store = { name: "Pharmacy Store" };

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "OneTouch Select Plus Test Strips, 50 Count",
      image: require("../assets/carousel1.jpg"),
      price: 1134.4,
      ptr: 113.4,
      rx: false,
      quantity: 1,
    },
    {
      id: 2,
      name: "OneTouch Select Plus Test Strips, 50 Count",
      image: require("../assets/carousel1.jpg"),
      price: 1134.4,
      ptr: 113.4,
      rx: true,
      quantity: 1,
    },
  ]);

  const [selectedOption, setSelectedOption] = useState<"prescription" | "withoutPrescription">("prescription");

  const incrementQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Scrollable Container for Cart Items and Upload Section */}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Pharmacy Store Card */}
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/shop.png")}
              style={styles.storeImage}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Title text={store.name} />
            <Text style={{ color: "gray", fontSize: 14 }}>
              Total Items added:{" "}
              <Text style={{ color: "black", fontWeight: "bold" }}>
                {cart.length}
              </Text>
            </Text>
          </View>
        </View>

        {/* Cart Items */}
        {cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <View style={styles.itemTopRow}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.productDetails}>
                <View style={styles.productNameContainer}>
                  <Title text={item.name} style={styles.productTitle} />
                  {item.rx && <Text style={styles.rxText}>(Rx)</Text>}
                </View>
                <Text style={styles.priceText}>
                  MRP ₹{item.price} | PTR ₹{item.ptr}
                </Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionsRow}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removeItem(item.id)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>

              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() => decrementQuantity(item.id)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <View style={styles.divider} />
                <Text style={styles.quantityValue}>{item.quantity}</Text>
                <View style={styles.divider} />
                <TouchableOpacity
                  onPress={() => incrementQuantity(item.id)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* Upload Section */}
        <View style={styles.uploadSection}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              selectedOption === "prescription" && styles.radioButtonSelected,
            ]}
            onPress={() => setSelectedOption("prescription")}
          >
            <Ionicons name="person-outline" size={24} style={styles.radioIcon} />
            <Text style={styles.radioText}>Upload Prescription</Text>
            <View
              style={[
                styles.outerCircle,
                selectedOption === "prescription" && { borderColor: colors.primary },
              ]}
            >
              <View
                style={[
                  styles.innerCircle,
                  selectedOption === "prescription" && { backgroundColor: colors.primary },
                ]}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.radioButton,
              selectedOption === "withoutPrescription" && styles.radioButtonSelected,
            ]}
            onPress={() => setSelectedOption("withoutPrescription")}
          >
            <Ionicons name="document-outline" size={24} style={styles.radioIcon} />
            <Text style={styles.radioText}>Upload Without Prescription</Text>
            <View
              style={[
                styles.outerCircle,
                selectedOption === "withoutPrescription" && { borderColor: colors.primary },
              ]}
            >
              <View
                style={[
                  styles.innerCircle,
                  selectedOption === "withoutPrescription" && { backgroundColor: colors.primary },
                ]}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Price Section Fixed at the Bottom */}
      <View style={styles.priceSection}>
        <View style={styles.priceDetails}>
          <Title text="Sub Total " style={{ color: "gray",fontSize:12 }} />
          <Title text={`₹ 228.8`} style={{ color: "black" ,fontSize:12}} />
          <Title text={`Discount`} style={{ color: "gray",fontSize:12, borderLeftWidth: 1, paddingLeft: 5 }} />
          <Title text={`0 %`} style={{ color: "green" ,fontSize:12}} />
        </View>

        <View style={styles.totalAndOrder}>
          <View style={styles.total}>
            <Title text="Total" style={{ color: "gray",fontSize:12 }} />
            <Title text="INR ₹ 2236.8/-" style={{ color: "black", fontSize: 18 }} />
            <Title text={`Total Items added 2`}  style={{color:'gray',fontSize:12}}/>
          </View>
          <View style={styles.placeOrderButtonContainer}>
            <Button title="Place Order" color={colors.primary} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollViewContainer: {
    paddingBottom: 120, // Add space for the fixed bottom section
  },
  // Pharmacy Store Card Styles
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  storeImage: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
  },
  // Cart Items Styles
  cartItem: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  productImage: {
    height: 50,
    width: 50,
    borderRadius: 8,
    resizeMode: "contain",
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productNameContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  productTitle: {
    fontSize: 16,
    flexShrink: 1,
  },
  rxText: {
    color: "red",
    fontWeight: "bold",
    marginLeft: 5,
  },
  priceText: {
    color: "gray",
    fontSize: 14,
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deleteButton: {
    width: "48%",
    height: 50,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  quantityContainer: {
    width: "48%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 4,
  },
  quantityButton: {
    paddingHorizontal: 15,
  },
  divider: {
    width: 1,
    height: "60%",
    backgroundColor: "#F0F0F0",
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  uploadSection: {
    marginTop: 20,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  radioButtonSelected: {
    borderColor: colors.primary,
    backgroundColor: "#E6F0FF",
  },
  radioIcon: {
    color: colors.primary,
    marginRight: 10,
  },
  radioText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    flex: 1,
  },
  outerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'gray',
  },
  priceSection: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 10,
    elevation:1
  },
  priceDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor:colors.secondary,
    borderWidth:1,
    borderColor:colors.primary,
    paddingHorizontal:'20%',
    paddingVertical:10,
    borderRadius:8
  },
  totalAndOrder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  total: {
    flex: 1,
  },
  placeOrderButtonContainer: {
    width: "50%",
    borderRadius:10
  },
});
