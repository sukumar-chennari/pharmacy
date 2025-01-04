import React, { useState } from "react";
import { StyleSheet, TextInput, View, TextInputProps, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type TextBoxProps = TextInputProps & {
  placeholder: string; // Placeholder text
  isPassword?: boolean; // If true, enables password functionality
  style?: object; // Allow additional dynamic styles
};

function TextBox({ placeholder, isPassword = false, style, ...rest }: TextBoxProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isPassword && !isPasswordVisible}
        style={styles.textBox}
        {...rest}
      />
      {isPassword && (
        <Pressable
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.iconContainer}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </Pressable>
      )}
    </View>
  );
}

export default TextBox;

const styles = StyleSheet.create({
  container: {
    position: "relative", // Ensures the icon can overlay within the container
    width: "100%",
  },
  textBox: {
    borderColor: "lightgray",
    borderWidth: 2,
    margin: 8,
    borderRadius: 10,
    height: 50,
    paddingLeft: 20,
    paddingRight: 50, // Space for the icon
    fontSize: 16,
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -12 }], // Center the icon vertically
  },
});
