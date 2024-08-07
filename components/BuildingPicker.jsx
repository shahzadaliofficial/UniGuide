import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

const buildingData = [
  "CB1",
  "CB2",
  "SEN",
  "Main Building, North Block",
  "Main Building, centeral Block",
  "Main Building, South Block",
  "Library",
  "SDT",
  "Majid",
];

const BuildingPicker = ({ label, onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [searchText, setSearchText] = useState("");

  const filteredData = buildingData.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View
      style={{
        flex: 1,
        // height: 10,
        width: "80%",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        marginBottom: 20,
        justifyContent: "center",
      }}
    >
      
        <Picker
          style={{ height: 10, width: "100%" }}
          selectedValue={selectedValue}
          onValueChange={(itemValue) => {
            setSelectedValue(itemValue);
            onValueChange(itemValue);
          }}
        >
          <Picker.Item label={"Select "+label} value={null} />
          {filteredData.map((item) => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      
    </View>
  );
};

export default BuildingPicker;
