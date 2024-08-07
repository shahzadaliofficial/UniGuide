import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";

// import Header from "../components/Header";
// import { fonts } from "../utils/fonts";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { addToCart } from "../utils/helper";
// import { CartContext } from "../context/CartContext";

const ProductDetailsScreen = () => {
  // const route = useRoute();
  // const navigation = useNavigation();
  const { title, price, image } = useLocalSearchParams();
  // const product = route.params.item;
  // const product = item;
  console.log(title, price, image);

  const handleViewOnMap = () => {
    console.log("Clicked on view");
  };
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <ScrollView>
        <View style={styles.header}>{/* <Header /> */}</View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.coverImage} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.fontText}>{title}</Text>
            <Text style={styles.fontText}>${price}</Text>
          </View>
          <Text style={styles.fontText}>Details Here</Text>
        </View>
        {/* cart button */}
        <View>
          <TouchableOpacity style={styles.button} onPress={handleViewOnMap}>
            <Text style={styles.buttonText}>View on Map</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
  },
  imageContainer: {
    flex: 1,
    height: 500,
    width: "100%",
    paddingHorizontal: 10,
  },
  coverImage: {
    height: "auto",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 20,
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontText: {
    fontSize: 20,
    fontFamily: "outfitRegular",
    fontWeight: "700",
    color: "#444444",
    color: "#444444",
  },
  sizeText: {
    marginTop: 20,
  },
  sizeContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  sizeValueContainer: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  sizeValueText: {
    fontSize: 18,
    fontFamily: "outfitRegular",
    fontWeight: "700",
  },
  selectedText: {
    color: "#E55B5B",
  },
  colorContainer: {
    flexDirection: "row",
  },
  borderColorCircle: {
    height: 48,
    width: 48,
    padding: 5,
    marginHorizontal: 5,
  },
  colorCircle: {
    flex: 1,
    borderRadius: 18,
  },
  button: {
    backgroundColor: "#E96E6E",
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 50,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
    fontFamily: "outfitRegular",
  },
});
