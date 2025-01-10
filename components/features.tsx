import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import colors from "@/constants/colors";
import { Link } from "expo-router";

function Features({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <View style={styles.grid}>
        {data.map((item) => (
          <Link key={item.id} href="/screens/orderMedicine" asChild>
            <Pressable style={styles.feature} accessible accessibilityLabel={item.title}>
              <Image source={item.localImage} style={styles.image} />
              <Text style={styles.text}>{item.title}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </View>
  );
}

export default Features;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: ,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap", // Allows wrapping to new rows
    justifyContent: "space-between", // Adds spacing between items
  },
  feature: {
    flexDirection: "row", // Image and text side by side
    alignItems: "center", // Vertical alignment
    justifyContent: "flex-start", // Align content to the start
    width: "48%", // Each item takes ~half the screen width
    padding: 10, // Inner padding
    marginBottom: 10, // Space between rows
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: colors.primary,
    elevation: 3, // Subtle shadow for depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 40, // Visible size for the image
    height: 40,
    resizeMode: "contain",
    marginRight: 10, // Spacing between image and text
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "left",
    flexShrink: 1, // Prevents text overflow
  },
});
