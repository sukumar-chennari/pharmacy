import React from "react";
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel"; // Import the package
import colors from "@/constants/colors";
import { Link } from "expo-router"; // Link component for navigation

const { width } = Dimensions.get("window");

const data = [
  { id: 1, title: "Slide 1", image: require("../assets/carousel1.jpg"), route: "../screens/orderMedicine" },
  { id: 2, title: "Slide 2", image: require("../assets/carousel2.jpg"), route: "../screens/orderMedicine" },
  { id: 3, title: "Slide 3", image: require("../assets/carousel3.jpg"), route: "../screens/orderMedicine" },
];

function CustomCarousel() {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.slide}>
        <Link href={item.route} style={{ flex: 1 }}>
          <Image source={item.image} style={styles.image} />
        </Link>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={150}
        data={data}
        scrollAnimationDuration={1000} // Duration of animation
        renderItem={renderItem}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10], // Gesture offset to trigger swipe
        }}
        autoPlay={true}
        autoPlayInterval={3000} // Auto-scroll interval, set to 3 seconds
      />
    </View>
  );
}

export default CustomCarousel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 150,
    marginTop: 10,
    overflow: "hidden", // Ensures the carousel content is confined within the border
    justifyContent: "center", // Vertically center the carousel
    alignItems: "center", // Horizontally center the carousel
    paddingHorizontal: 20, // Optional padding if you want space around the carousel
  },
  slide: {
    justifyContent: "center", // Keep items centered vertically
    alignItems: "center", // Keep items centered horizontally
    backgroundColor: "transparent",
    marginHorizontal: '5%', // Space between the slides
    marginVertical:'3%',
    flex: 1, // Ensure the slide takes full height of the carousel
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

