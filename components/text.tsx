import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface TitleProps {
  text: string; // Required text prop
  style?: TextStyle; // Optional style prop with React Native's `TextStyle` type
}

export default function Title({ text, style }: TitleProps) {
  return <Text style={[styles.defaultStyle, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
