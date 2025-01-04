import colors from "@/constants/colors";
import React from "react";
import { StyleSheet, Text, Pressable, GestureResponderEvent, ViewStyle } from "react-native";

type PrimaryButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  styles?: ViewStyle; // Optional custom styles for the button
};

function PrimaryButton({ title, onPress, styles }: PrimaryButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        defaultStyles.button,
        styles,
        pressed && defaultStyles.pressed, // Add style when pressed
      ]}
      onPress={onPress}
    >
      <Text style={defaultStyles.buttonText}>{title}</Text>
    </Pressable>
  );
}

export default PrimaryButton;

const defaultStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary, // Default button background color
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    margin:10,
    padding:30
  },
  buttonText: {
    color: "white", // Default text color
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    backgroundColor: "#3700b3", // Darker color when button is pressed
    opacity: 0.85, // Slight transparency when pressed
  },
});
