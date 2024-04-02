import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const LongPurpleButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Continue</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#A855F7',
    marginTop: 50
  },
  text: {
    fontFamily: "SF Pro Display",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: "#fff",
    textAlign: "center",
  }
})

export default LongPurpleButton;
