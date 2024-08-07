import { Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";



export default function LogIn() {
  const [savedName, setSavedName] = useState("");

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const name = await AsyncStorage.getItem("savedName");
        setSavedName(name || "");
        console.log("savedName:", savedName);
        // If logged in, navigate to the home screen
        if (savedName.trim().length > 0) {
          router.replace("/(tabs)");
        } else {
          router.replace("/login");
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkLoggedIn();
  }, []);
  return true
}
