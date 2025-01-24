import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from "react-native";
import Search from "../../components/search";
import Title from "../../components/text";
import Icon from "react-native-vector-icons/Ionicons";
import AddressList from "../../components/addressList";
import colors from "@/constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function MakeAddress() {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      {/* Search Component */}
      <View style={{backgroundColor:colors.primary,borderBottomEndRadius:10,borderBottomLeftRadius:10,height:50}}>
      <Search  />
      </View>
     

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Title text="Select Address Option" style={styles.title} />

        {/* Add a new address */}
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => navigation.navigate('AddNewAddress')}
        >
          <Title text="Add a new Address" style={styles.optionText} />
          <Icon name="chevron-forward-outline" size={20} color="gray" />
        </TouchableOpacity>

        {/* Add a new pickup location */}
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => console.log("Navigate to Add Pickup Location Screen")}
        >
          <Title text="Add a new Pickup Location" style={styles.optionText} />
          <Icon name="chevron-forward-outline" size={20} color="gray" />
        </TouchableOpacity>

        <Title text="Address List" style={styles.addressTitle} />
        <AddressList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    paddingHorizontal: 16,
    marginTop: 30, // Space below the search bar
    paddingBottom: 16, // Extra space at the bottom to avoid cut-off
  },
  title: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
  },
  optionText: {
    fontSize: 16,
    color: "gray",
  },
  addressTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
