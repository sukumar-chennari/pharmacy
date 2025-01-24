import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/constants/colors";
import FetchAddress from "@/components/deliveryAddres";
import { useNavigation } from "@react-navigation/native";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const [addressFetched, setAddressFetched] = useState(false);

  useEffect(() => {
    if (addressFetched) {
      const timer = setTimeout(() => {
        navigation.navigate("Tabs"); // Change this to your main screen
      }, 4000); // 4 seconds delay

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [addressFetched, navigation]);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("../../assets/delivery.jpg")} // Replace with your background image
        style={styles.backgroundImage}
      />

      {/* Overlay Content */}
      <View style={styles.overlayContainer}>
        {/* Location Icon */}
        <View style={styles.iconContainer}>
          <Ionicons name="location" size={40} color={colors.primary} />
        </View>

        {/* Address Section */}
        <View style={styles.addressContainer}>
          <Text style={styles.heading}>DELIVERING TO</Text>
          <FetchAddress onAddressFetched={() => setAddressFetched(true)} />
        </View>

        {/* Loader */}
        {!addressFetched && (
          <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
        )}
      </View>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  overlayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  addressContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
  loader: {
    marginTop: 20,
  },
});
