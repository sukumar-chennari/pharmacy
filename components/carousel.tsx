import React from "react";
import { StyleSheet, View, Text, Dimensions, Image, Pressable } from "react-native";
import Carousel from "react-native-reanimated-carousel"; // Import the package
import colors from "@/constants/colors";
import { useNavigation } from "@react-navigation/native"; // For navigation

const { width } = Dimensions.get("window");

const data = [
  { id: 1, title: "Slide 1", image: require("../assets/carousel1.jpg"), route: "orderMedicineScreen" },
  { id: 2, title: "Slide 2", image: require("../assets/carousel2.jpg"), route: "Screen2" },
  { id: 3, title: "Slide 3", image: require("../assets/carousel3.jpg"), route: "Screen3" },
];

function CustomCarousel() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.slide}
        onPress={() => navigation.navigate(item.route)} // Navigate to the screen specified in the data array
      >
        <Image source={item.image} style={styles.image} />
      </Pressable>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "transparent",
    marginHorizontal: 10, // Space between the slides
  },
  image: {
    width: "90%",
    height: "90%",
    resizeMode: "cover",
  },
  title: {
    position: "absolute",
    bottom: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
