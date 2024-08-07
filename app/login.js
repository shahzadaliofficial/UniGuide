import React,{useState} from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextComponent,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = () => {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [nameError, setNameError] = useState("");
  const [roleError, setRoleError] = useState("");

  function capitalizeFirstLetterOfEachWord(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem(
        "savedName",
        capitalizeFirstLetterOfEachWord(name)
      );
      console.log("Name saved successfully");
    } catch (error) {
      console.error("Error saving name:", error);
    }
  };
  const validateForm = () => {
    let valid = true;
    if (name.trim().length === 0) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    if (role.trim().length === 0) {
      setRoleError("Role is required");
      valid = false;
    } else {
      setRoleError("");
    }

    return valid;
  };
  return (
    <LinearGradient
      colors={["#3b82f6", "#4ade80"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Text style={styles.welcomeText}>Welcome to</Text>

      <Image
        source={require("@/assets/images/Uniguide-logo.png")}
        style={{ width: "100%", height: 150 }}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={setName}
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={role}
          style={styles.picker}
          onValueChange={(itemValue) => setRole(itemValue)}
        >
          <Picker.Item label="Select Your Role" value="" />
          <Picker.Item label="Student" value="student" />
          <Picker.Item label="Teacher" value="teacher" />
          <Picker.Item label="Admin" value="admin" />
        </Picker>
        {roleError ? <Text style={styles.errorText}>{roleError}</Text> : null}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("name", name);
          if (validateForm()) {
            handleSave();
            router.replace({ pathname: "/(tabs)" });
          }
        }}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    Height: "100%",
    width: "100%",
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  pickerContainer: {
    height: 50,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 20,
    justifyContent: "center",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
});

export default SignIn;
