import React, { FC } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomeText from "../../common/CustomeText";
import ResetPass from "./ResetPass";

const ResetPassLayout: FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.pic1}
        source={require("../../../assets/image/Polygon3.png")}
      />
      <Image
        style={styles.pic2}
        source={require("../../../assets/image/Polygon3.png")}
      />
      <View style={styles.textArea}>
        <CustomeText myStyle={styles.title}>بازیابی رمز عبور</CustomeText>
        <CustomeText myStyle={styles.describe}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ... چاپ و با
          استفاده از طراحان گرافیک است
        </CustomeText>
      </View>
      <ResetPass />
    </View>
  );
};

export default ResetPassLayout;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",
    width: "100%",
    display: "flex",
    paddingTop: 50,
  },
  pic1: { position: "absolute", top: -200, left: -150 },
  pic2: { position: "absolute", top: 250, right: -150 },
  textArea: { height: "20%", width: "100%", paddingHorizontal: 30 },
  title: { fontSize: 30, textAlign: "right", color: "#575757" },
  describe: {
    fontSize: 14,
    textAlign: "right",
    color: "#575757",
    marginTop: 10,
  },
});
