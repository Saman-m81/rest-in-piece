import React, { FC, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import Mail from "../../../assets/image/mail.svg";
import { useNavigation } from "@react-navigation/native";
import { Anim } from "../../common/Animation";
import MyInput from "../../common/MyInput";
import CustomeText from "../../common/CustomeText";

const ResetPass: FC = () => {
  const navigation = useNavigation();

  const IncreaseHeight = useRef(new Animated.Value(80)).current;

  const TopImageWidth = IncreaseHeight.interpolate({
    inputRange: [40, 80],
    outputRange: ["40%", "80%"],
  });

  useEffect(() => {
    Anim(IncreaseHeight, 40, 800);
  }, []);
  return (
    <Animated.View style={{ ...styles.container, height: TopImageWidth }}>
      <View style={styles.keyboards}>
        <KeyboardAvoidingView>
          <MyInput InputStyle={styles.input} placeholder="ایمیل" />
          <Mail style={styles.svg} />
        </KeyboardAvoidingView>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <CustomeText myStyle={styles.buttonText}>تایید ایمیل</CustomeText>
        </TouchableOpacity>
      </View>

      <View style={styles.wrapper}>
        <CustomeText
          onPress={() => navigation.navigate("SignUp1", { Forget: true })}
          myStyle={styles.log}
        >
          ثبت نام
        </CustomeText>
        <View style={styles.line}></View>
        <CustomeText
          onPress={() => navigation.navigate("LogIn")}
          myStyle={styles.log}
        >
          ورود
        </CustomeText>
      </View>
    </Animated.View>
  );
};

export default ResetPass;
const styles = StyleSheet.create({
  svg: { position: "absolute", right: 15, top: 15 },
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
    padding: 15,
    paddingRight: 40,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    position: "relative",
    height: 50,
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
  log: { fontSize: 15, color: "#fff", textDecorationLine: "underline" },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: 45,
  },
  line: {
    borderWidth: 1,
    borderColor: "#fff",
    width: 1,
    height: "80%",
    marginTop: 5,
  },
});
