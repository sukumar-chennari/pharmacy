import React from "react";
import { StyleSheet, TextInput, View, TextInputProps, ViewStyle, StyleProp } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchProps extends TextInputProps {
  searchStyle?: StyleProp<ViewStyle>; // Custom container styles
  inputStyle?: StyleProp<ViewStyle>; // Custom input styles
}

function Search({ searchStyle, inputStyle, ...props }: SearchProps) {
  return (
    <View style={[styles.container, searchStyle]}>
      <TextInput
        placeholder="Search..."
        style={[styles.searchBox, inputStyle]}
        {...props} // Pass other TextInputProps
      />
      <Ionicons name="search" size={24} color="gray" style={styles.icon} />
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: "lightgray",
    paddingHorizontal: 10,
    backgroundColor: "white",
    height: 50,
    // width: "100%",
    marginTop: 10, // Default margin for spacing,
    marginHorizontal:10
  },
  icon: {
    marginRight: 10,
  },
  searchBox: {
    flex: 1,
    fontSize: 16,
    color: "black",
    paddingVertical: 5,
  },
});
