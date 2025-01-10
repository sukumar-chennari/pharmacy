import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import Card from "./card";
import Search from "./search";
import colors from "@/constants/colors";

export default function StoreName() {
  const { width } = Dimensions.get("window"); // Get the screen width
  const cardWidth = (width - 30) / 2; // Subtract total horizontal padding and divide for 2 columns

  const products = Array.from({ length: 20 }, (_, index) => ({
    name: "OneTouch Select Plus Test Strips, 50 Count",
    image: require("../assets/carousel1.jpg"),
    price: 1134.4,
    discount: 20,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search />
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => <Card product={item} style={{ width: cardWidth }} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Two columns
        columnWrapperStyle={styles.columnWrapper} // Style for columns
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  search: {
    backgroundColor: colors.primary,
    height:150,
    padding: 5,
    borderRadius:10 // Padding around the search bar
  },
  columnWrapper: {
    justifyContent: "space-between", // Evenly space columns
    marginBottom: 15,
  },
  contentContainer: {
    paddingHorizontal: 10, // Ensure horizontal padding matches
    paddingTop: 50,
  },
});
