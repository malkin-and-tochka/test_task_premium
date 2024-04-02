import { Text, View, StyleSheet } from "react-native";
import InfoRow from "../InfoRow";
import HeadphonesSVG from "../../../../assets/ENG_headphones.svg";
import PriceButton from "../buttons/PriceButton";

const Premium = ({ selectedId, setSelectedId }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        English Listening
      </Text>
      <Text style={styles.subTitle}>
        study Premium
      </Text>
      <View style={styles.offerWrapper}>
        <InfoRow svg={<HeadphonesSVG />} text={"English Listening by Podcast"} />
        <InfoRow svg={null} text={"Unlimited quizzes"} />
        <InfoRow svg={null} text={"Word translation"} />
        <InfoRow svg={null} text={"Background operation mode"} />
      </View>
      <View style={styles.row}>
        <PriceButton id={0} actionTime={"6 months"} beforePrice={""} afterPrice={"17,99"} selectedId={selectedId}
                     setSelectedId={setSelectedId} />
        <PriceButton id={1} actionTime={"12 months"} beforePrice={"47,88"} afterPrice={"29,99"} selectedId={selectedId}
                     setSelectedId={setSelectedId} />
        <PriceButton id={2} actionTime={"1 month"} beforePrice={""} afterPrice={"3,99"} selectedId={selectedId}
                     setSelectedId={setSelectedId} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    width: '90%'
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
  offerWrapper: {
    width: "100%",
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 50,
  },
});

export default Premium;
