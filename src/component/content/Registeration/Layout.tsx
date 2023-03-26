import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  Animated,
} from "react-native";
import React, { FC } from "react";

type Props = {
  Tchildren: JSX.Element;
  Bchildren: JSX.Element;
  Negative: number | Animated.Value;
  Positive: number | Animated.Value;
  TopImageWidth: string | Animated.AnimatedInterpolation<string | number>;
  TopImageRight: string | Animated.AnimatedInterpolation<string | number>;
  TopImageB: string | Animated.AnimatedInterpolation<string | number>;
  TopImageRotate: string | Animated.AnimatedInterpolation<string | number>;
  BottomImageB?: string | Animated.AnimatedInterpolation<string | number>;
};

const Layout: FC<Props> = ({
  Tchildren,
  Bchildren,
  Negative,
  Positive,
  TopImageWidth,
  TopImageRight,
  TopImageB,
  TopImageRotate,
  BottomImageB = "9%",
}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        position: "relative",
        elevation: Platform.OS === "android" ? 1 : 0,
      }}
    >
      <Animated.Image
        source={require("../../../assets/images/Polygon1.png")}
        style={{
          ...styles.topImage,
          width: TopImageWidth,
          right: TopImageRight,
          bottom: TopImageB,
          transform: [{ rotate: TopImageRotate }],
        }}
        alt="polygen"
      />
      <Animated.Image
        source={require("../../../assets/images/Polygon1.png")}
        style={{
          ...styles.bottomImage,
          width: TopImageWidth,
          bottom: BottomImageB,
        }}
        alt="polygen"
      />

      <SafeAreaView style={{ flex: 1 }}>
        <Animated.View
          style={{
            ...styles.holder,
            justifyContent: "center",
            alignItems: "center",
            flex: Negative,
          }}
        >
          {Tchildren}
        </Animated.View>
        <Animated.View
          style={{
            ...styles.holder,
            ...styles.bottom,
            flex: Positive,
          }}
        >
          {Bchildren}
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  holder: {
    paddingHorizontal: "8%",
  },
  bottom: {
    backgroundColor: "#3A84FF",
    paddingBottom: "7%",
    paddingTop: 35,
    borderTopStartRadius: 35,
    borderTopRightRadius: 35,
    zIndex: 10,
  },
  topImage: {
    position: "absolute",
    transform: [{ rotate: "30deg" }],
    zIndex: -1,
    resizeMode: "contain",
  },
  bottomImage: {
    position: "absolute",
    left: "53%",
    zIndex: -1,
    transform: [{ rotate: "31deg" }],
    resizeMode: "contain",
  },
});
