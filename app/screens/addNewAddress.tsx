import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import colors from "@/constants/colors";
import Title from "@/components/text";

export default function AddNewAddress() {
  const [isDefaultAddress, setIsDefaultAddress] = useState(false);

  const toggleDefaultAddress = () => {
    setIsDefaultAddress(!isDefaultAddress);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Title text="Please Enter Your Details" style={styles.title} />

          {/* Input fields */}
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#ccc"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="H-No"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            placeholder="Landmark"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            placeholder="Area"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            placeholder="State"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            placeholder="Pin code"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Country"
            placeholderTextColor="#ccc"
          />

          {/* Radio Button for Default Address */}
          <TouchableOpacity
            style={[
              styles.radioButtonContainer,
              isDefaultAddress && { backgroundColor: colors.secondary },
            ]}
            onPress={toggleDefaultAddress}
          >
            <Text
              style={[
                styles.radioButtonText,
                isDefaultAddress && { color: colors.primary },
              ]}
            >
              MAKE IT DEFAULT ADDRESS
            </Text>
            <View
              style={[
                styles.outerCircle,
                isDefaultAddress && { borderColor: colors.primary },
              ]}
            >
              <View
                style={[
                  styles.innerCircle,
                  isDefaultAddress && { backgroundColor: colors.primary },
                ]}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Full-width Button */}
      <View style={styles.buttonContainer}>
        <Button title="Add Address" color={colors.primary} onPress={() => {}} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
  radioButtonText: {
    fontSize: 16,
    color: "#ccc",
    flex: 1,
  },
  outerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "gray",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
});
