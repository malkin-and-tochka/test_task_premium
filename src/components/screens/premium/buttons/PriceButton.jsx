import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const PriceButton = ({ selectedId, beforePrice, afterPrice, actionTime, setSelectedId, id }) => {
  const isSelected = selectedId === id;
  return (
    <TouchableOpacity style={isSelected ? [styles.higherWrapper, { backgroundColor: "#A855F7" }] : styles.higherWrapper}
                      onPress={() => setSelectedId(id)}
                      hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
      <Text style={styles.beforePrice}>
        {beforePrice ? (`${beforePrice} $`) : null}
      </Text>
      <View style={styles.lowerWrapper}>
        <Text style={styles.afterPrice}>
          {afterPrice} $
        </Text>
      </View>
      <Text style={styles.actionTime}>
        {actionTime}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  higherWrapper: {
    backgroundColor: "#404040",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 90,
    gap: 5,
    width: "30%",
  },
  lowerWrapper: {
    backgroundColor: "rgba(19, 10, 27, 0.2)",
    borderRadius: 10,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    width: "100%",
  },
  beforePrice: {
    fontFamily: "SF Pro Display",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 20,
    color: "#fff",
    textAlign: "center",
    textDecorationLine: "line-through",
  },
  afterPrice: {
    fontFamily: "SF Pro Display",
    fontSize: 28,
    fontWeight: "500",
    lineHeight: 33,
    color: "#fff",
    textAlign: "center",
  },
  actionTime: {
    fontFamily: "SF Pro Display",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    bottom: -20,
  },
});

export default PriceButton;
