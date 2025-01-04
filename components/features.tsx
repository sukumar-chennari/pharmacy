import React from "react";
import colors from "@/constants/colors";
import { Image, StyleSheet, Text, FlatList, View } from "react-native";

function Features() {
  const data = [
    { title: "Order Medicine", localImage: require("../assets/order.png") },
    { title: "Care at home", localImage: require("../assets/care.png") },
    { title: "Book Diagnostics", localImage: require("../assets/diagnostics.png") },
    { title: "Consult a Doctor", localImage: require("../assets/consult.png") },
  ];

  const renderFeature = ({ item }) => (
    <View style={styles.feature}>
      <Image source={item.localImage} style={styles.image} />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderFeature}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()} // Ensures each item has a unique key
      contentContainerStyle={styles.container}
    />
  );
}

export default Features;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Allows content to center if fewer items
    justifyContent: "center",
    padding: 10,
  },
  feature: {
    height: 167,
    width: 167,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    elevation: 1,
    backgroundColor: "white", // Add background for better visibility
  },
  image: {
    width: 80,
    height: 80, // Fixed image size for consistency
    resizeMode: "contain",
    marginBottom: 10,
  },
  text: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center", // Ensure text is centered
  },
});
