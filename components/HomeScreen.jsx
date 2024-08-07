import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
// import Header from "../components/Header";
import Tags from "@/components/Tags";
import ProductCard from "@/components/ProductCard";
import data from "@/constants/data.json";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);

  const [savedName, setSavedName] = useState("");
  useEffect(() => {
    const fetchSavedName = async () => {
      try {
        const name = await AsyncStorage.getItem("savedName");

        setSavedName(name || "User"); // Set default name if not found
      } catch (error) {
        console.error("Error retrieving name:", error);
        // Handle error, e.g., show a message to the user
      }
    };

    fetchSavedName();
  }, []);

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      {/* header */}

      {/* <Tags /> */}

      <FlatList
        ListHeaderComponent={
          <>
            <>
              {/* <Header /> */}
              <View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "start",
                    padding: 16,
                    paddingTop: 20,
                  }}
                >
                  <View>
                    <Image
                      source={require("@/assets/images/logo.png")}
                      style={{ width: 120, height: 30, marginTop: 15 }}
                    />
                  </View>
                  <View
                    style={{
                      //   flex: 0.2,
                      //   backgroundColor: "yellow",
                      justifyContent: "flex-start",
                      alignItems: "start",
                      //   paddingLeft: 0,
                    }}
                  >
                    <Text style={{ fontFamily: "outfitBold", fontSize: 20 }}>
                      Hi, {savedName}!
                    </Text>
                    <Text
                      style={{
                        fontStyle: "outfitRegular",
                        color: "gray",
                        fontSize: 15,
                      }}
                    >
                      Location
                    </Text>

                    <Text
                      style={{
                        fontStyle: "outfitMedium",
                        color: "blue",
                        fontSize: 18,
                      }}
                    >
                      STD, 3rd Floor{" "}
                    </Text>
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <Image
                    source={require("@/assets/images/search.png")}
                    style={styles.searchIcon}
                  />
                  <TextInput placeholder="Search" style={styles.textInput} />
                </View>
              </View>
            </>
            <Tags />
          </>
        }
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            handleProductClick={(item) => {
              console.log("item", item);
              router.push({
                pathname: "/ProductDetailsScreen",
                params: {
                  title: item.title,
                  price: item.price,
                  image: item.image,
                },
              });
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <View>
        {/* <Text>HomeScreen</Text>
        <Text>HomeScreen</Text> */}
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },

  headingText: {
    fontSize: 28,
    color: "#000000",
    marginVertical: 20,
    fontFamily: "Poppins-Regular",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
});
