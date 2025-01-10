import { Image, StyleSheet, Text, View, Button, ScrollView } from "react-native";
import Title from "./text";
import colors from "@/constants/colors";

export default function ProductDetails() {
  const product = {
    name: "OneTouch Select Plus Test Strips, 50 Count",
    image: require("../assets/carousel1.jpg"),
    price: 1134.4,
    discount: 20,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
      </View>

      <View style={styles.infoContainer}>
        <Title text="Rx" style={{ marginVertical: 3 }} />
        <Title text={product.name} style={{ marginTop: 10 }} />
        <Title text="Package Details" style={{ color: 'gray', marginBottom: 10,fontSize:16 }} />
        <View style={styles.innerContainer}>
          <Title style={styles.discount} text={product.discount ? `- ${product.discount}%` : ""} />
          <Title style={styles.price} text={`₹ ${product.price}`} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Add Cart" color={colors.primary} onPress={() => {}}  />
        </View>
      </View>

      <Title text="Description" />
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{product.description}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  imageContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 10,
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  infoContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 10,
    paddingHorizontal:10
  },
  discount: {
    width: 60,
    borderRadius: 20,
    backgroundColor: "red",
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    padding:8

  },
  price: {
    fontWeight: "bold",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  buttonWrapper: {
    marginTop: 5,
    marginBottom:20,
    marginLeft:'50%',
    borderRadius:20,
    width: "50%", // Optional: you can control the width of the button wrapper
  },
  descriptionContainer: {
    flex: 1,
    padding: 10,
  },
  descriptionText: {
    color: "gray",
    lineHeight: 20,
  },
});
