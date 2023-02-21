import React, { FC, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Anim } from "../../common/Animation";

import User from "../../../assets/image/user.svg";
import Phone from "../../../assets/image/phone.svg";
import Id from "../../../assets/image/idNumber.svg";
import CustomeText from "../../common/CustomeText";
import MyInput from "../../common/MyInput";
interface Props {}
const SignUpStep1: FC<Props> = () => {
  const [animated, setAnimated] = useState<boolean>(true);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route = useRoute();
  const Sign = route.params?.Sign;
  const Sign2 = route.params?.Sign2;
  const Forget = route.params?.Forget;

  const IncreaseHeight = useRef(new Animated.Value(40)).current;

  const TopImageWidth = IncreaseHeight.interpolate({
    inputRange: [40, 80],
    outputRange: ["40%", "80%"],
  });

  useEffect(() => {
    if (isFocused) {
      if (Sign) {
        Anim(IncreaseHeight, 80, 0);
      } else if (Forget) {
        Anim(IncreaseHeight, 80, 800);
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
      <View style={styles.stepper}>
        <View style={styles.steperText}>
          <CustomeText myStyle={{ fontSize: 16, color: "white" }}>
            1
          </CustomeText>
        </View>
        <View
          style={{ width: 130, height: 1, backgroundColor: "white" }}
        ></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp2");
            setAnimated(false);
          }}
        >
          <View style={{ ...styles.steperText, opacity: 0.5 }}>
            <CustomeText myStyle={{ fontSize: 16, color: "white" }}>
              2
            </CustomeText>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.keyboards}>
        <KeyboardAvoidingView style={styles.inputWrapper}>
          <MyInput
            InputStyle={{ ...styles.input, marginTop: 0 }}
            placeholder="نام کاربر"
          />
          <User style={styles.svg} />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.inputWrapper}>
          <MyInput InputStyle={styles.input} placeholder="شماره تماس" />
          <Phone style={styles.svg} />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.inputWrapper}>
          <MyInput InputStyle={styles.input} placeholder="شماره ملی" />
          <Id style={styles.svg} />
        </KeyboardAvoidingView>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp2");
            setAnimated(false);
          }}
          style={styles.button}
        >
          <CustomeText myStyle={styles.buttonText}>گام بعدی</CustomeText>
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
        <CustomeText myStyle={styles.loginq}>
          در حال حاضر اکانت فعال دارید؟
        </CustomeText>
        <CustomeText
          myStyle={styles.logina}
          onPress={() => {
            navigation.navigate("LogIn", { Log: true });
            setAnimated(false);
          }}
        >
          ورود
        </CustomeText>
      </View>
    </Animated.View>
  );
};

export default SignUpStep1;

const styles = StyleSheet.create({
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
  stepper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: 230,
  },
  steperText: {
    width: 35,
    height: 35,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  first: { width: 220, height: 35 },
  keyboards: {},
  input: {
    padding: 10,
    paddingHorizontal: 50,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    position: "relative",
    height: 50,
  },
  svg: { position: "absolute", right: 15, top: 12.5 },
  inputWrapper: { marginVertical: 12.5 },
  button: {
    backgroundColor: "#0043F7",
    width: "100%",
    height: 50,
    borderRadius: 60,
    paddingVertical: 10,
  },
  buttonText: { color: "#fff", textAlign: "center" },
  login: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "center",
  },
  loginq: { fontSize: 15, color: "#fff" },
  logina: { fontSize: 15, color: "#fff", textDecorationLine: "underline" },
});
