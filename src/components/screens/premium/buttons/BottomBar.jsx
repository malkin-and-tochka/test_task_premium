import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BottomBar = () => {
  return (
    <View style={styles.wrapper}>
      <Link text={'Terms of use'}/>
      <Link text={'Restore purchase'}/>
      <Link text={'Privacy policy'}/>
    </View>
  );
};

const Link = ({ text }) => {
  const [isTouched, setIsTouched] = useState(false);
  return (
    <TouchableOpacity activeOpacity={1} onPressOut={() => setIsTouched(false)} onPressIn={() => setIsTouched(true)}
                      style={styles.textWrapper}>
      <Text style={isTouched ? [styles.text, { color: "#A855F7" }] : styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
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
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    position: "absolute",
    bottom: 0,
  },
  textWrapper: {
    width: "30%",
    height: 30,
  },
});

export default BottomBar;
