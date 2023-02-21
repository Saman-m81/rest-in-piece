import { Image, StyleSheet, View, Text } from "react-native";
import React, { FC, useEffect } from "react";
import BigLine from "../../assets/image/Polygon5.svg";
import LittleLine from "../../assets/image/Polygon6.svg";
import Little from "../../assets/image/Polygon7.svg";
import Big from "../../assets/image/Polygon4.svg";
import Logo from "../../assets/image/logo.svg";

import { Anim } from "../common/Animation";
import CustomeText from "../common/CustomeText";
type Props = { open: boolean };

const SplashScreen: FC<Props> = ({ open }) => {
  if (!open) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Logo />
          <CustomeText myStyle={{ fontSize: 23, color: "#00469A" }}>
            آکادمی کدنویسی بحر
          </CustomeText>
        </View>

        <Little style={styles.little} />
        <LittleLine style={styles.littleLine} />
        <Big style={styles.big} />
        <BigLine style={styles.bigLine} />
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  littleLine: { position: "absolute", top: -85, right: -100 },
  little: { position: "absolute", top: -120, right: -130 },
  bigLine: { position: "absolute", bottom: -225, left: -325 },
  big: { position: "absolute", bottom: -250, left: -300 },
});
