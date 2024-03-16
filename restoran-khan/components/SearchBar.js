import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.bgStyle}>
      <AntDesign
        style={styles.iconStyle}
        name="search1"
        size={30}
        color="black"
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search..."
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bgStyle: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    margin: 10,
    height: 50,
    alignItems: "center",
    borderRadius: 20,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
