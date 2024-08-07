import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import BuildingPicker from "@/components/BuildingPicker";
const Explore = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  return (
    <ImageBackground
      source={require("../../assets/images/Umt.png")} // Replace with your image path
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Find Path</Text>
        <BuildingPicker
          label="Current Location"
          onValueChange={setCurrentLocation}
        />
        <BuildingPicker label="Destination" onValueChange={setDestination} />
        {/* <Text>Current Location: {currentLocation}</Text>
        <Text>Destination: {destination}</Text> */}
      </View>
        
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain', 'stretch', 'repeat', 'center'
    justifyContent: "center", // Align items vertically
    alignItems: "center", // Align items horizontally
  },
  overlay: {
    height: 200,
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Explore;
