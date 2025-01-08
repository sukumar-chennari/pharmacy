import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

function Category() {
    const categories=['Option', 'Option', 'Option', 'Option', 'Option']
  return (
    <>
    <Text style={styles.title}>Categories</Text>
        <ScrollView
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((item, index) => {
        return (
          <View key={index}>
            <View  style={styles.category}>
              <Image
                source={require("../assets/medicine.png")} // Assuming each category has an `image` URL
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>Option</Text>
          </View>
        );
      })}
    </ScrollView>
    </>

  );
}

export default Category;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 5,
    backgroundColor:'white'
  },
  category: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    position: "relative",
    height: 80, // Set a height to ensure space for the image and text
    width: 80,
    borderWidth: 2,
    borderColor: "#297873",
    borderRadius: 200,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30, // Circular image
    marginBottom: 10, // Space between the image and the text
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    width: "100%", // Ensures the text width is full to avoid overflow
    paddingHorizontal: 5, // Adds padding on both sides for better readability
  },
  title:{
    fontSize:19,
    color:'gray'
  }
});
