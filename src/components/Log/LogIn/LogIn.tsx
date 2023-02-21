import React, { FC, useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import Mail from "../../../assets/image/mail.svg";
import Lock from "../../../assets/image/lock.svg";
import Eye from "../../../assets/image/eye.svg";
import CloseEye from "../../../assets/image/CloseEye.svg";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Anim } from "../../common/Animation";
import MyInput from "../../common/MyInput";
import CustomeText from "./../../common/CustomeText";
type Props = {};
const LogIn: FC<Props> = ({}) => {
  const [animated, setAnimated] = useState<boolean>(true);
  const [showHidePassword, setShowHidePassword] = useState<boolean>(false);

  const navigation = useNavigation();
  const route = useRoute();
  const Log = route.params?.Log;
  const isFocused = useIsFocused();
  const IncreaseHeight = useRef(new Animated.Value(40)).current;

  const TopImageWidth = IncreaseHeight.interpolate({
    inputRange: [40, 80],
    outputRange: ["40%", "80%"],
  });
  useEffect(() => {
    if (isFocused) {
      if (Log) {
        Anim(IncreaseHeight, 80, 0);
      }
      Anim(IncreaseHeight, 80, 800);
    } else {
      if (!animated) {
        Anim(IncreaseHeight, 80, 0);
        setAnimated(true);
      } else {
        Anim(IncreaseHeight, 40, 800);
      }
    }
  }, [isFocused]);
  return (
    <Animated.View style={{ ...styles.container, height: TopImageWidth }}>
      <View>
        <KeyboardAvoidingView style={styles.keyboards}>
          <MyInput InputStyle={styles.input} placeholder="ایمیل" />
          <Mail style={styles.svg} />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.keyboards}>
          <MyInput
            placeholder="رمز عبور"
            InputStyle={styles.input}
            type={showHidePassword ? true : false}
          />
          <Lock style={styles.svg} />
          {!showHidePassword ? (
            <CloseEye
              style={styles.eye}
              fill="gray"
              onPress={() => setShowHidePassword(!showHidePassword)}
            />
          ) : (
            <Eye
              style={styles.eye}
              fill="gray"
              onPress={() => setShowHidePassword(!showHidePassword)}
            />
          )}
        </KeyboardAvoidingView>
        <View>
          <CustomeText
            onPress={() => navigation.navigate("ResetPassword")}
            myStyle={styles.forgetPass}
          >
            فراموشی رمز عبور؟
          </CustomeText>
        </View>
      </View>
      <View style={styles.keyboards}>
        <TouchableOpacity style={styles.button}>
          <CustomeText myStyle={styles.buttonText}>ورود</CustomeText>
        </TouchableOpacity>
      </View>
      <View style={styles.signup}>
        <CustomeText myStyle={styles.signq}>
          در حال حاضر اکانت فعال ندارید؟
        </CustomeText>
        <CustomeText
          myStyle={styles.signa}
          onPress={() => {
            navigation.navigate("SignUp1", { Sign: true });
            setAnimated(false);
          }}
        >
          ثبت نام
        </CustomeText>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.line}></View>
        <CustomeText myStyle={styles.communication}>ورود از طریق</CustomeText>
        <View style={styles.line}></View>
      </View>
      <View style={styles.flex}>
        <View style={styles.img}>
          <Image source={require("../../../assets/image/google.png")} />
        </View>
        <View style={styles.img}>
          <Image source={require("../../../assets/image/twitter.png")} />
        </View>
        <View style={styles.img}>
          <Image source={require("../../../assets/image/facebook.png")} />
        </View>
      </View>
    </Animated.View>
  );
};

export default LogIn;
const styles = StyleSheet.create({
  svg: { position: "absolute", right: 15, top: 15 },
  eye: { position: "absolute", left: 15, top: 17 },
  container: {
    borderColor: "#1762BC",
    borderWidth: 1,
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
  keyboards: { marginVertical: 12.5 },
  input: {
    padding: 10,
    paddingHorizontal: 50,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 60,
    position: "relative",
    height: 50,
  },
  forgetPass: {
    textAlign: "left",
    marginLeft: 20,
    color: "#fff",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#0043F7",
    width: "100%",
    height: 50,
    borderRadius: 60,
    paddingVertical: 10,
  },
  buttonText: { color: "#fff", textAlign: "center" },
  signup: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "center",
  },
  signq: { fontSize: 15, color: "#fff" },
  signa: { fontSize: 15, color: "#fff", textDecorationLine: "underline" },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  line: {
    borderBottomWidth: 2,
    borderColor: "#fff",
    width: "25%",
    height: 2,
    marginTop: 15,
  },
  communication: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
  },
  flex: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  img: { width: 35, height: 35, backgroundColor: "#fff", borderRadius: 50 },
});
