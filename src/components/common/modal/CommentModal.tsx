import { View, KeyboardAvoidingView } from "react-native";
import React, { FC } from "react";
import CustomeText from "../CustomeText";
import ModalWrapper from "./ModalWrapper";
import ImageLoader from "../imageloader/ImageLoader";
import MyInput from "./../MyInput";
import Btn from "../Btn";

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommentModal: FC<Props> = ({ visible, setVisible }) => {
  return (
    <>
      <ModalWrapper visible={visible} setVisible={setVisible}>
        <View
          style={{
            width: "100%",
            height: "90%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageLoader
              style={{ height: 100, width: 100, borderRadius: 50 }}
              src="../../assets/image/user.png"
            />
            <CustomeText myStyle={{ color: "#002D85", fontSize: 25 }}>
              Saman
            </CustomeText>
          </View>
          <View>
            <MyInput
              multiline={true}
              InputStyle={{
                borderColor: "#E3E6E8",
                borderWidth: 1,
                backgroundColor: "#FCFCFC",
                borderRadius: 25,
                height: 230,
              }}
              showSoftInputOnFocus={true}
              placeholder="متن نظر"
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Btn
              Press={() => setVisible(false)}
              Vstyle={{
                borderWidth: 1,
                borderColor: "#FF0000",
                backgroundColor: "white",
                width: 130,
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                borderRadius: 50,
              }}
              title="بازگشت"
              Tstyle={{ fontSize: 15, color: "#FF0000" }}
            />
            <Btn
              Vstyle={{
                backgroundColor: "#04A641",
                width: 130,
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                borderRadius: 50,
              }}
              title="ثبت نظر"
              Tstyle={{ fontSize: 15, color: "#fff" }}
            />
          </View>
        </View>
      </ModalWrapper>
    </>
  );
};

export default CommentModal;
