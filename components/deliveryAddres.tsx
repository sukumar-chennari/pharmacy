import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import useLocation from "./fetchAddress";


const FetchAddress = ({ onAddressFetched }: { onAddressFetched: () => void }) => {
  const { locationData, loading, error } = useLocation();

  useEffect(() => {
    if (!loading && !error) {
      onAddressFetched(); // Notify parent that address is fetched
    }
  }, [loading, error, onAddressFetched]);

  if (loading) {
    return <Text style={styles.loading}>Fetching Address...</Text>;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View>
      <Text style={styles.area}>{locationData.area}</Text>
      <Text style={styles.detailedAddress}>{locationData.detailedAddress}</Text>
    </View>
  );
};

export default FetchAddress;

const styles = StyleSheet.create({
  area: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  detailedAddress: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginTop: 5,
  },
  loading: {
    fontSize: 14,
    color: "gray",
  },
  error: {
    fontSize: 14,
    color: "red",
  },
});
