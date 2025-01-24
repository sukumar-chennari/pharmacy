import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Title from "./text";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "@/constants/colors";
import { Dimensions } from "react-native";

// Get screen width for dynamic sizing
const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth * 0.3; // 30% of screen width for the profile image

export default function Account() {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        {/* Circular Image */}
        <View style={styles.imageWrapper}>
          <Image
            source={require("../assets/carousel1.jpg")} // Replace with actual image URL
            style={styles.profileImage}
            resizeMode="contain" // Ensures the entire image is visible
          />
        </View>
        {/* User Name */}
        <Title text="User Name" style={styles.userName} />
        {/* Upload Profile Photo */}
        <TouchableOpacity onPress={() => console.log("Upload Profile Photo")}>
          <Text style={styles.uploadText}>Upload Profile Photo</Text>
        </TouchableOpacity>
      </View>

      {/* Settings Section */}
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => console.log("Navigate to History Page")}
      >
        <Icon name="time-outline" size={20} color="gray" />
        <Text style={styles.optionText}>History</Text>
        <Icon name="chevron-forward-outline" size={20} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => console.log("Navigate to Privacy & Policy Page")}
      >
        <Icon name="shield-outline" size={20} color="gray" />
        <Text style={styles.optionText}>Privacy & Policy</Text>
        <Icon name="chevron-forward-outline" size={20} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => console.log("Logout")}
      >
        <Icon name="log-out-outline" size={20} color="gray" />
        <Text style={styles.optionText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 16,
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: 30,
    padding: 16,
    borderRadius: 8,
  },
  imageWrapper: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    overflow: "hidden", // Ensures the circular shape contains the entire image
    borderWidth: 2, // Optional border
    borderColor: "#ccc", // Optional border color
    backgroundColor: "#f5f5f5", // Optional background color for the wrapper
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Ensures the whole image fits inside the wrapper
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
  },
  uploadText: {
    fontSize: 14,
    color: colors.primary,
    textDecorationLine: "underline",
    marginTop: 8,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  optionText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "gray",
  },
});
