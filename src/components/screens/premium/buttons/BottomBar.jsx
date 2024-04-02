import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BottomBar = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.textWrapper}>
        <Text style={styles.text}>
          Terms of use
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textWrapper}>
        <Text style={styles.text}>
          Restore purchase
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textWrapper}>
        <Text style={styles.text}>
          Privacy policy
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "SF Pro Display",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    color: "#A3A3A3",
    textAlign: "center",
  },
  wrapper: {
    width: '90%',
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  textWrapper: {
    width: '30%',
    height: 30
  }
})

export default BottomBar;
