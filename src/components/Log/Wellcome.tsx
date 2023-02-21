import React, { FC, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Anim } from "../common/Animation";
import CustomeText from "../common/CustomeText";

const Wellcome: FC = () => {
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const IncreaseHeight = useRef(new Animated.Value(0)).current;

  const TopImageWidth = IncreaseHeight.interpolate({
    inputRange: [0, 45],
    outputRange: ["0%", "45%"],
  });

  useEffect(() => {
    if (isFocused) {
      Anim(IncreaseHeight, 45, 800);
    }
  }, [isFocused]);
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.pic1}
        source={require("../../assets/image/Polygon4.png")}
      />
      <Image
        style={Styles.pic2}
        source={require("../../assets/image/Polygon4.png")}
      />
      <View style={Styles.logo}>
        <Image source={require("../../assets/image/logo.png")} />
      </View>
      <Animated.View style={{ ...Styles.blue, height: TopImageWidth }}>
        <View>
          <CustomeText myStyle={Styles.title}>خوش آمدید</CustomeText>
        </View>
        <View>
          <CustomeText myStyle={Styles.describe}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرهاو متون بلکه … روزنامه و مجله در
            ستون و سطرآنچنان که لازم است...
          </CustomeText>
        </View>
        <View style={Styles.buttons}>
          <TouchableOpacity
            style={Styles.signup}
            onPress={() => navigation.navigate("SignUp1")}
          >
            <CustomeText myStyle={Styles.text}>ثبت نام</CustomeText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("LogIn")}
            style={Styles.login}
          >
            <CustomeText myStyle={Styles.text}>ورود</CustomeText>
          </TouchableOpacity>
        </View>
        <View>
          <CustomeText
            onPress={() => navigation.navigate("Courses")}
            myStyle={Styles.home}
          >
            ورود به صفحه اصلی
          </CustomeText>
        </View>
      </Animated.View>
    </View>
  );
};

export default Wellcome;
const Styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  blue: {
    width: "100%",
    backgroundColor: "#3A84FF",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    paddingVertical: 50,
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
  pic1: {
    position: "absolute",
    left: 75,
    bottom: -20,
  },
  pic2: {
    position: "absolute",
    right: 20,
    top: -200,
  },
  logo: {
    position: "absolute",
    top: 200,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  name: { fontSize: 22, color: "#00469A", textAlign: "center" },
  title: {
    lineHeight: 37,
    fontSize: 30,
    color: "#fff",
  },
  describe: {
    fontSize: 14,
    color: "#fff",
  },
  buttons: {
    // marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  signup: {
    borderColor: "#fff",
    borderWidth: 1,
    width: "45%",
    paddingVertical: 12,
    borderRadius: 50,
    height: 50,
  },
  login: {
    backgroundColor: "#0043F7",
    width: "45%",
    paddingVertical: 12,
    borderRadius: 50,
  },
  text: {
    textAlign: "center",
    color: "#fff",
  },
  // homeVeiw: { marginTop: 30 },
  home: {
    color: "#fff",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
