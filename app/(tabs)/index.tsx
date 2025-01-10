import { FlatList, StyleSheet, View, Text } from "react-native";
import Address from "@/components/address";
import CustomCarousel from "@/components/carousel";
import Features from "@/components/features";
import WelcomeUser from "@/components/welcomeUser";
import Store from "@/components/store";

function HomeScreen() {
  const data = [
    { id: "1", title: "Order Medicine", localImage: require("../../assets/order.png") },
    { id: "2", title: "Care at home", localImage: require("../../assets/care.png") },
    { id: "3", title: "Book Diagnostics", localImage: require("../../assets/diagnostics.png") },
    { id: "4", title: "Consult a Doctor", localImage: require("../../assets/consult.png") },
  ];

  return (
    <View style={styles.container}>
      {/* Address component stays outside FlatList */}
      <Address />
      <FlatList
        data={[]} // Empty data because we use ListHeaderComponent and ListFooterComponent
        renderItem={() => null} // No need to render items directly
        ListHeaderComponent={
          <>
            <WelcomeUser />
            <CustomCarousel />
            <Features data={data} />
          </>
        }
        ListFooterComponent={<>
        <Text  style={styles.title}>Near pharmacy stores</Text>
        <Store/>
        </>}
        keyExtractor={() => "homeScreen"} // Just a unique key for the whole list
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollableContainer}
        showsVerticalScrollIndicator={true} // Enable vertical scroll indicator
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollableContainer: {
    flex: 1,
    marginTop: 20,
  },
  contentContainer: {
    flexGrow: 1, // Ensure the content stretches to allow scrolling
    paddingHorizontal: 10,
    paddingBottom: 20, // Add bottom padding for better spacing
    gap: 10,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginVertical:8
  }
});
