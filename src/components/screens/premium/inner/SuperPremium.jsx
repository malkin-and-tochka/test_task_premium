import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SaleStar from "../../../../assets/Sale_star.svg";
import InfoRow from "../InfoRow";
import HeadphonesSVG from "../../../../assets/ENG_headphones.svg";
import Cards from "../../../../assets/Learning_cards.svg";
import SubTune from "../../../../assets/SubTune.svg";
import AITutor from "../../../../assets/AI_tutor.svg";
import PriceButton from "../buttons/PriceButton";

const SuperPremium = ({ selectedId, setSelectedId }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        Speak like a native
      </Text>
      <Text style={styles.subTitle}>
        4 apps for all your needs, maximum value
      </Text>
      <View style={styles.offerWrapper}>
        <SaleStar width={100} height={100} style={styles.starImg} />
        <View style={styles.saleWrapper}>
          <Text style={styles.saleText}>
            Discount over of
          </Text>
          <Text style={styles.saleNumber}>
            50%
          </Text>
        </View>
        <InfoRow svg={<HeadphonesSVG />} text={"Master the understanding"} />
        <InfoRow svg={<Cards />} text={"Learn 5000 words, various levels"} />
        <InfoRow svg={<SubTune />} text={"Watch & learn videos in Safari"} />
        <InfoRow svg={<AITutor />} text={"Boost your lexical skills"} />
      </View>
      <View style={styles.row}>
        <PriceButton id={0} actionTime={"6 months"} beforePrice={"69,98"} afterPrice={"34,99"} selectedId={selectedId}
                     setSelectedId={setSelectedId} />
        <PriceButton id={1} actionTime={"12 months"} beforePrice={"119,98"} afterPrice={"59,99"} selectedId={selectedId}
                     setSelectedId={setSelectedId} />
        <PriceButton id={2} actionTime={"1 month"} beforePrice={"19,98"} afterPrice={"9,99"} selectedId={selectedId}
                     setSelectedId={setSelectedId} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    width: '100%'
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
  saleNumber: {
    fontFamily: "SF Pro Display",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 30,
    color: "#fff",
    textAlign: "center",
  },
  saleWrapper: {
    position: "absolute",
    bottom: -2,
    right: -2,
    zIndex: 100,
    transform: [{ rotate: "15deg" }],
  },
  starImg: {
    position: "absolute",
    bottom: -20,
    right: -20,
    zIndex: 100,
  },
  offerWrapper: {
    width: "90%",
    flexDirection: "column",
    gap: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: "#404040",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#A855F7",
    alignItems: "flex-start",
  },
  saleText: {
    fontFamily: "SF Pro Display",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 12,
    color: "#fff",
    width: 50,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 50,
  },
});

export default SuperPremium;
