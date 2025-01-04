import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainIcon from "@/components/mainIcon";
import PrimaryButton from "@/components/PrimaryButton";
import colors from "@/constants/colors";

function SignInScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [iconSize, setIconSize] = useState(150); // Initial size of the MainIcon

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setIconSize(100); // Resize icon when keyboard appears
    });

    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setIconSize(150); // Reset icon size when keyboard hides
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Main Icon */}
      <MainIcon size={iconSize} />

      {/* Welcome Section */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Image source={require("../../assets/medley2.png")} style={styles.logo} />
      </View>

      {/* Form Section */}
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.textBox}
          keyboardType="email-address"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={styles.textBox}
            secureTextEntry={!passwordVisible}
          />
          <Pressable
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={passwordVisible ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </Pressable>
        </View>

        <Pressable onPress={() => alert("Forgot Password Pressed!")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </Pressable>

        <PrimaryButton title="Login" onPress={() => alert("Login Pressed!")} />
      </View>

      {/* Create Account Section */}
      <View style={styles.accountContainer}>
        <Text style={styles.text}>
          Don't have an account?{" "}
          <Text style={styles.innerText} onPress={() => alert("Create Account Pressed!")}>
            Create Account
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Ensure content stays at the top
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 50, // Increased margin to ensure no overlap
  },
  welcomeText: {
    fontSize: 18,
    color: "gray",
    marginBottom: 5,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  textInputContainer: {
    width: "90%",
    marginTop: 20, // Additional margin to separate from the main icon
  },
  textBox: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "white",
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  forgotPassword: {
    color: colors.primary,
    textAlign: "right",
    marginTop: 5,
    marginBottom: 10,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
  accountContainer: {
    alignItems: "center",
    marginBottom: 40, // Added more space from the bottom of the screen
  },
  text: {
    color: "gray",
  },
  innerText: {
    color: colors.primary,
    fontWeight: "bold",
  },
});
