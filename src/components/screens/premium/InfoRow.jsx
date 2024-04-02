import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

const InfoRow = ({ svg, text }) => {
  const [isPressed, setIsPressed] = useState(false)
  return (
    <TouchableOpacity activeOpacity={1} onPressIn={() => setIsPressed(true)} onPressOut={() => setIsPressed(false)} style={styles.row}>
      <View style={svg ? null : {width: 60}}>
        {svg}
      </View>
      <Text style={svg ? [styles.text, {color: isPressed ? '#A855F7' : '#fff'}] : [styles.text, {textDecorationLine: "none", color: isPressed ? '#A855F7' : '#fff'}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 22,
    color: "#fff",
    textDecorationLine: "underline",
  },
  img: {
    height: 80,
    width: 80,
  },
  row: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default InfoRow;
