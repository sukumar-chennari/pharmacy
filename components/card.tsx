import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Card({ product, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>
        {product.name}
      </Text>
      <View style={styles.innerContainer}>
        <Text style={styles.discount}>
          {product.discount ? `- ${product.discount}%` : ""}
        </Text>
        <Text style={styles.price}>{`₹ ${product.price}`}</Text>
      </View>
      <Button title="Add Cart" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginVertical: 5,
    textAlign: "center",
  },
  discount: {
    width: 50,
    borderRadius: 20,
    backgroundColor: "red",
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight:'bold'
  },
  price:{
    fontWeight:'bold'
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 13,
  },
});
