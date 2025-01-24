import React from "react";
import colors from "@/constants/colors";
import { StyleSheet, View, Image, Dimensions } from "react-native";

function MainIcon({ size }: { size: number }) {
  return (
    <View style={[styles.container, { height: size * 1.1 }]}>
      <Image
        source={require("../assets/medley.png")}
        style={[
          styles.image,
          { width: size, height: size, bottom: -(size * 0.33) },
        ]}
      />
    </View>
  );
}

export default MainIcon;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 105,
    borderBottomRightRadius: 105,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
  image: {
    position: "absolute",
    borderRadius: 100,
    backgroundColor: "white",
  },
});
