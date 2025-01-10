import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {Ionicons } from "@expo/vector-icons";

export default function Store() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const stores = [
    {
      id: "1",
      name: "Pharmacy Store",
      rating: "4.4",
      reviews: "(1.8k+)",
      time: "40-45min",
      location: "Banjara Hills",
      distance: "2.5km",
    },
    {
      id: "2",
      name: "Pharmacy Store",
      rating: "4.4",
      reviews: "(1.8k+)",
      time: "40-45min",
      location: "Banjara Hills",
      distance: "2.5km",
    },
    {
      id: "3",
      name: "Pharmacy Store",
      rating: "4.4",
      reviews: "(1.8k+)",
      time: "40-45min",
      location: "Banjara Hills",
      distance: "2.5km",
    },
    {
      id: "4",
      name: "Pharmacy Store",
      rating: "4.4",
      reviews: "(1.8k+)",
      time: "40-45min",
      location: "Banjara Hills",
      distance: "2.5km",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={stores}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/shop.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.storeName}>{item.name}</Text>
              <Text style={styles.rating}>
                ⭐ {item.rating}{" "}
                <Text style={styles.reviews}>{item.reviews}</Text> • {item.time}
              </Text>
              <Text style={styles.location}>
                {item.location}, {item.distance}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => toggleFavorite(item.id)}
              accessibilityLabel={`Toggle favorite for ${item.name}`}
            >
                         <Ionicons
                name={favorites.includes(item.id) ? "heart" : "heart-outline"}
                size={24}
                color={favorites.includes(item.id) ? "red" : "gray"}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  image: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  reviews: {
    fontSize: 12,
    color: "#999",
  },
  location: {
    fontSize: 14,
    color: "#999",
  },
  favoriteButton: {
    padding: 8,
  },
  heartIcon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});
