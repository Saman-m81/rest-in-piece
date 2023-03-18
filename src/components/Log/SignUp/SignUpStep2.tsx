import React, { FC, useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
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
import { RegisterStudent } from "../../../utils/core/Services/api/RegisterStudent";

const SignUpStep2: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const formikRef = useRef();
  const [val, setVal] = useState<string>(
    getFormatedDate(new Date(), "jYYYY/jMM/jDD")
  );

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current?.setFieldValue("birthDate", val);
    }
    setVisible(false);
  }, [val]);
  const handleSubmit = async (value: {
    email: string;
    password: string;
    fullName: any;
    phoneNumber: any;
    nationalId: any;
    birthDate: string;
  }) => {
    const data = {
      ...value,
      profile: "user.png",
    };
    RegisterStudent({ value: data, setLoading });
  };
  const navigation = useNavigation();
  const route = useRoute();

  const fullName = route.params?.fullName;
  const nationalId = route.params?.nationalId;
  const phoneNumber = route.params?.phoneNumber;

  return (
    <>
      {loading ? (
        <ModalWrapper animIn="fadeIn" animOut="fadeOut" visible={loading}>
          <View style={{ height: 100 }}>
            <ActivityIndicator size={50} color={"blue"} />
            <CustomeText
              myStyle={{
                fontSize: 12,
                color: "#222",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              لطفا صبر کنید
            </CustomeText>
          </View>
        </ModalWrapper>
      ) : null}
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
          innerRef={formikRef}
          onSubmit={handleSubmit}
          initialValues={{
            email: "",
            password: "",
            birthDate: "",
            fullName: fullName,
            phoneNumber: phoneNumber,
            nationalId: nationalId,
          }}
          validationSchema={SignUpValidation}
        >
          {({ errors, handleChange, handleSubmit, values, setFieldValue }) => (
            <>
              <View>
                <KeyboardAvoidingView style={styles.keyboards}>
                  <MyInput
                    showSoftInputOnFocus={false}
                    onPressIn={() => setVisible(true)}
                    InputStyle={styles.input}
                    placeholder="تاریخ تولد"
                    value={val}
                    onChangeText={handleChange("birthDate")}
                  />
                  <ModalWrapper visible={visible} setVisible={setVisible}>
                    <Datepicker val={val} setVal={setVal} />
                  </ModalWrapper>
                  <Calender style={styles.svg} />
                  <Birthday style={styles.eye} />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.keyboards}>
                  <MyInput
                    errors={errors.email}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    InputStyle={styles.input}
                    placeholder="ایمیل"
                  />
                  <Mail style={styles.svg} />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.keyboards}>
                  <MyInput
                    errors={errors.password}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    InputStyle={styles.input}
                    placeholder="رمز عبور"
                  />
                  <Lock style={styles.svg} />
                  <Eye style={styles.eye} />
                </KeyboardAvoidingView>
              </View>
              <View>
                <Btn
                  Vstyle={styles.button}
                  Tstyle={styles.buttonText}
                  Press={() => handleSubmit()}
                  title="ثبت نام"
                ></Btn>
              </View>
            </>
          )}
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
    </>
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
