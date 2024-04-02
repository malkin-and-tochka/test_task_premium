import { View, StyleSheet, Image, ScrollView } from "react-native";
import BG_bubble from "../../../assets/BG_bubble.png";
import Cross from "../../../assets/X.svg";
import { useState } from "react";
import LongPurpleButton from "./buttons/LongPurpleButton";
import BottomBar from "./buttons/BottomBar";
import SuperPremium from "./inner/SuperPremium";
import Premium from "./inner/Premium";
import ToggleVersion from "./ToggleVersion";

const PremiumScreen = () => {
  const [togglePremiumVersion, setTogglePremiumVersion] = useState("SP");
  const [selectedId, setSelectedId] = useState(0);
  const setSP = () => setTogglePremiumVersion("SP");
  const setP = () => setTogglePremiumVersion("P");
  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={true} contentContainerStyle={styles.wrapper}>
      <Image style={styles.bubble} source={BG_bubble} />
      <Cross style={styles.cross} />
      <ToggleVersion togglePremiumVersion={togglePremiumVersion} setP={setP} setSP={setSP} />
      {togglePremiumVersion === "SP" ?
        <SuperPremium selectedId={selectedId} setSelectedId={setSelectedId} /> :
        <Premium selectedId={selectedId} setSelectedId={setSelectedId} />}
      <View style={togglePremiumVersion === "SP" ? styles.bottomBar : [styles.bottomBar, {
        position: "absolute",
        bottom: 0,
      }]}>
        <LongPurpleButton />
        <BottomBar />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#27272A",
    minHeight: "100%",
    alignItems: "center",
    paddingTop: 10,
  },
  title: {
    fontFamily: "SF Pro Display",
    fontSize: 27,
    fontWeight: "700",
    lineHeight: 27,
    color: "#fff",
    marginTop: 23,
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: "SF Pro Display",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    color: "#fff",
    marginBottom: 10,
  },
  bubble: {
    position: "absolute",
  },
  cross: {
    alignSelf: "flex-start",
    paddingLeft: "20%",
    marginBottom: 10,
  },
  bottomBar: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default PremiumScreen;
