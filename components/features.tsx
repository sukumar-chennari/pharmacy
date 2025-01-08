import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  FlatList,
  View,
  Pressable,
} from "react-native";
import colors from "@/constants/colors";
import { Link } from "expo-router";

function Features({ data }) {
  const renderFeature = ({ item }) => (
    <Link href="/screens/orderMedicine" asChild>
      <Pressable style={styles.feature} accessible accessibilityLabel={item.title}>
        <Image source={item.localImage} style={styles.image} />
        <Text style={styles.text}>{item.title}</Text>
      </Pressable>
    </Link>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderFeature}
      numColumns={2} // Ensure a 2-column layout
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={true} // Enable scroll indicator
    />
  );
}

export default Features;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  feature: {
    height: 150,
    width: "45%", // Adjust width dynamically for consistent spacing
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "2.5%", // Equal margin on both sides
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  text: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});
