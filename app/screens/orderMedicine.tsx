import { FlatList, StyleSheet, View, Text } from "react-native";
import Address from "@/components/address";
import CustomCarousel from "@/components/carousel";
import Features from "@/components/features";
import WelcomeUser from "@/components/welcomeUser";
import Category from "@/components/categories";

const OrderMedicine = () => {
  const data = [
    { id: "1", title: "Book Diagnostics", localImage: require("../../assets/diagnostics.png") },
    { id: "2", title: "Consult a Doctor", localImage: require("../../assets/consult.png") },
  ];

  return (
    <View style={styles.container}>
      <Address />
      <FlatList
        data={[]}
        renderItem={null} // No direct item rendering
        ListHeaderComponent={<HeaderSection data={data} />}
        ListFooterComponent={<Category />}
        keyExtractor={() => "orderMedicineScreen"}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// Header Section Component
const HeaderSection = ({ data }) => (
  <View>
    <WelcomeUser />
    <CustomCarousel />
    <View style={styles.featuresContainer}>
      <Text style={styles.title}>Upcoming Services</Text>
      <Features data={data} />
    </View>
  </View>
);

export default OrderMedicine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  featuresContainer: {
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    color: "gray",
    marginVertical: 5,
  },
});
