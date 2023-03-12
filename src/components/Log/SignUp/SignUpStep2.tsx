import React, { FC, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Calender from "../../../assets/image/calender.svg";
import Birthday from "../../../assets/image/birthday.svg";
import Mail from "../../../assets/image/mail.svg";
import Lock from "../../../assets/image/lock.svg";
import Eye from "../../../assets/image/eye.svg";
import CustomeText from "../../common/CustomeText";
import MyInput from "../../common/MyInput";
import { Formik } from "formik";
import { SignUpValidation } from "../../../utils/core/Validation/Validation";
import ModalWrapper from "../../common/modal/ModalWrapper";
import Datepicker from "../../common/Datepicker/Datepicker";
import Btn from "../../common/Btn";
import { getFormatedDate } from "react-native-modern-datepicker";

const SignUpStep2: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const formikRef = useRef();
  const [val, setVal] = useState<string>(
    getFormatedDate(new Date(), "jYYYY/jMM/jDD")
  );

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.setFieldValue("age", val);
    }
    setVisible(false);
  }, [val]);

  const navigation = useNavigation();
  const route = useRoute();

  const nationalId = route.params?.nationalId;
  const fullName = route.params?.fullName;
  const phoneNumber = route.params?.phoneNumber;

  return (
    <View style={styles.container}>
      <View style={styles.stepper}>
        <View style={styles.stepper}>
          <Btn
            Tstyle={{ display: "none" }}
            Vstyle={{}}
            Press={() => navigation.navigate("SignUp1", { Sign: true })}
          >
            <View style={{ ...styles.steperText, opacity: 0.5 }}>
              <CustomeText myStyle={{ fontSize: 16, color: "white" }}>
                1
              </CustomeText>
            </View>
          </Btn>

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
      <Formik
        onSubmit={() => console.log("")}
        initialValues={{ email: "", password: "", age: "" }}
        validationSchema={SignUpValidation}
      >
        <>
          <View>
            <KeyboardAvoidingView style={styles.keyboards}>
              <MyInput
                showSoftInputOnFocus={false}
                onPressIn={() => setVisible(true)}
                InputStyle={styles.input}
                placeholder="تاریخ تولد"
                value={val}
              />
              <ModalWrapper visible={visible} setVisible={setVisible}>
                <Datepicker val={val} setVal={setVal} />
              </ModalWrapper>
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
        </>
      </Formik>
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
