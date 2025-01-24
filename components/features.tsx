import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import colors from "@/constants/colors";
import { useNavigation } from "@react-navigation/native";

function Features({ data }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <View style={styles.grid}>
        {data.map((item) => {
          const isActive = item.id === "1"; // Check if the feature is active
          return (
            <Pressable
              key={item.id} // Unique key for each child
              style={[
                styles.feature,
                !isActive && styles.inactiveFeature, // Apply gray style for inactive features
              ]}
              accessible
              accessibilityLabel={item.title}
              onPress={() => {
                if (isActive) {
                  navigation.navigate("OrderMedicine"); // Navigate only if active
                }
              }}
              disabled={!isActive} // Disable press for inactive features
            >
              <Image
                source={item.localImage}
                style={[styles.image, !isActive && styles.inactiveImage]}
              />
              <Text
                style={[
                  styles.text,
                  !isActive && styles.inactiveText, // Apply gray text for inactive features
                ]}
              >
                {item.title}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default Features;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  inactiveFeature: {
    backgroundColor: "#d3d3d3", // Gray background for inactive features
    borderColor: "#b0b0b0", // Gray border for inactive features
    elevation: 0, // No shadow for inactive features
  },
  image: {
    width: 40, // Visible size for the image
    height: 40,
    resizeMode: "contain",
    marginRight: 10, // Spacing between image and text
  },
  inactiveImage: {
    opacity: 0.5, // Dimmed image for inactive features
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "left",
    flexShrink: 1, // Prevents text overflow
  },
  inactiveText: {
    color: "#7a7a7a", // Gray text for inactive features
  },
});
