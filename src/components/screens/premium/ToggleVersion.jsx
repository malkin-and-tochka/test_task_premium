import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const ToggleVersion = ({setP, setSP, togglePremiumVersion}) => {
  return (
    <View style={styles.toggleWrapper}>
      <TouchableOpacity onPress={setP}
                        style={togglePremiumVersion === "P" ? [styles.toggleButton, styles.premiumSelected] : styles.toggleButton}>
        <Text style={togglePremiumVersion === "P" ? [styles.toggleText, {
          color: "#C991FF",
          fontSize: 15,
          fontWeight: "700",
        }] : styles.toggleText}>Premium</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={setSP}
                        style={togglePremiumVersion === "SP" ? [styles.toggleButton, styles.superPremiumSelected] : styles.toggleButton}>
        <Text style={togglePremiumVersion === "SP" ? [styles.toggleText, {
          fontSize: 15,
          fontWeight: "700",
        }] : styles.toggleText}>Super Premium</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleWrapper: {
    backgroundColor: "#404040",
    height: 42,
    width: "90%",
    borderRadius: 5,
    flexDirection: "row",
    opacity: 0.9,
    padding: 2,
  },
  toggleButton: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  toggleText: {
    fontFamily: "SF Pro Display",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    color: "#fff",
  },
  superPremiumSelected: {
    backgroundColor: "#8E2AEE",
    borderRadius: 5,
  },
  premiumSelected: {
    backgroundColor: "#636366",
    borderRadius: 5,
  },
})

export default ToggleVersion;
