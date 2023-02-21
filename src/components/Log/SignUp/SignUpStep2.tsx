import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Calender from "../../../assets/image/calender.svg";
import Birthday from "../../../assets/image/birthday.svg";
import Mail from "../../../assets/image/mail.svg";
import Second from "../../../assets/image/second.svg";
import Lock from "../../../assets/image/lock.svg";
import Eye from "../../../assets/image/eye.svg";
import CustomeText from "../../common/CustomeText";
import MyInput from "../../common/MyInput";

const SignUpStep2: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.stepper}>
        <View style={styles.stepper}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp1", { Sign: true })}
          >
            <View style={{ ...styles.steperText, opacity: 0.5 }}>
              <CustomeText myStyle={{ fontSize: 16, color: "white" }}>
                1
              </CustomeText>
            </View>
          </TouchableOpacity>
          <View
            style={{ width: 130, height: 1, backgroundColor: "white" }}
          ></View>
          <View style={styles.steperText}>
            <CustomeText myStyle={{ fontSize: 16, color: "white" }}>
              2
            </CustomeText>
          </View>
        </View>
      </View>
      <View>
        <KeyboardAvoidingView style={styles.keyboards}>
          <MyInput InputStyle={styles.input} placeholder="تاریخ تولد" />
          <Calender style={styles.svg} />
          <Birthday style={styles.eye} />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.keyboards}>
          <MyInput InputStyle={styles.input} placeholder="ایمیل" />
          <Mail style={styles.svg} />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.keyboards}>
          <MyInput InputStyle={styles.input} placeholder="رمز عبور" />
          <Lock style={styles.svg} />
          <Eye style={styles.eye} />
        </KeyboardAvoidingView>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <CustomeText myStyle={styles.buttonText}>ثبت نام</CustomeText>
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
        <CustomeText myStyle={styles.loginq}>
          در حال حاضر اکانت فعال دارید؟
        </CustomeText>
        <CustomeText
          myStyle={styles.logina}
          onPress={() => navigation.navigate("LogIn", { Log: true })}
        >
          ورود
        </CustomeText>
      </View>
    </View>
  );
};

export default SignUpStep2;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#3A84FF",
    height: "80%",
    minHeight: 350,
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
  svg: { position: "absolute", right: 15, top: 15 },
  eye: { position: "absolute", left: 15, top: 15 },

  button: {
    backgroundColor: "#0043F7",
    width: "100%",
    height: 50,
    borderRadius: 60,
    paddingVertical: 10,
    marginVertical: 12.5,
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
