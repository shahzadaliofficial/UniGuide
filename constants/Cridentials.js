import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cridentials = () => {
  const [savedName, setSavedName] = useState("");
  console.log(savedName);
  const params = useLocalSearchParams();
  const sName = params.name;
  useEffect(() => {
    const fetchSavedName = async () => {
      try {
        const name = await AsyncStorage.getItem("savedName");

        setSavedName(name); // Set default name if not found
      } catch (error) {
        console.error("Error retrieving name:", error);
        // Handle error, e.g., show a message to the user
      }
    };

    fetchSavedName();
  }, []);
  return savedName;
};

export default Cridentials;
