import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Search() {
  return (
    <View style={styles.container}>
      
      <TextInput
        placeholder="Search..."
        style={styles.searchBox}
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
    width: "100%",
    position: "absolute", 
    justifyContent:'center',// Makes the component absolutely positioned
    top: 130, // Adjust this value to position the search bar vertically
    left: "1%", // Centers the search bar horizontally
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
