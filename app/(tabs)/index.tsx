import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text, Modal } from "react-native";
import Address from "@/components/address";
import CustomCarousel from "@/components/carousel";
import Features from "@/components/features";
import WelcomeUser from "@/components/welcomeUser";
import SignInScreen from "../screens/signInScreen";
import Stores from "./stores";

export default function HomeScreen() {
  const [isSignInVisible, setIsSignInVisible] = useState(true); // Modal visibility state

  const data = [
    { id: "1", title: "Order Medicine", localImage: require("../../assets/order.png") },
    { id: "2", title: "Care at home", localImage: require("../../assets/care.png") },
    { id: "3", title: "Book Diagnostics", localImage: require("../../assets/diagnostics.png") },
    { id: "4", title: "Consult a Doctor", localImage: require("../../assets/consult.png") },
  ];
  const handleSignInComplete = () => {
    setIsSignInVisible(false); // Close modal after sign-in
  };

  return (
    <View style={styles.container}>
      {/* SignIn Modal */}
      <Modal
        visible={isSignInVisible}
        animationType="slide"
        onRequestClose={() => setIsSignInVisible(false)}
      >
        <View style={styles.modalContainer}>
          <SignInScreen
            onComplete={handleSignInComplete} // Close modal after login
            onClose={() => setIsSignInVisible(false)} // Close modal if user clicks crossmark
          />
        </View>
      </Modal>

      {/* Main content */}
      <Address />
      <FlatList
        data={[]} // Empty data because we use ListHeaderComponent and ListFooterComponent
        renderItem={() => null} // No need to render items directly
        ListHeaderComponent={
          <>
            <WelcomeUser />
            <CustomCarousel />
            <Features data={data} />
          </>
        }
        ListFooterComponent={
          <>
            <Text style={styles.title}>Near pharmacy stores</Text>
            <Stores />
          </>
        }
        keyExtractor={() => "homeScreen"} // Just a unique key for the whole list
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollableContainer}
        showsVerticalScrollIndicator={true} // Enable vertical scroll indicator
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff", // Background color for the modal
  },
  scrollableContainer: {
    flex: 1,
    marginTop: 20,
  },
  contentContainer: {
    flexGrow: 1, // Ensure the content stretches to allow scrolling
    paddingHorizontal: 10,
    paddingBottom: 20, // Add bottom padding for better spacing
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
  },
});
