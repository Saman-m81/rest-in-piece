import { TouchableOpacity, StyleProp, View, ViewStyle } from "react-native";
import ModalWrapper from "./ModalWrapper";
import CustomeText from "../CustomeText";
import ArrowDown from "../../../assets/image/arrowDown.svg";
import React, { useState, FC } from "react";

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
  arr: Array<{ value: string; label: string }>;
  check: string;
  SetCheck: (data: string) => void;
}

const CustomeCategory: FC<Props> = ({ title, style, arr, check, SetCheck }) => {
  const [vis, SetVis] = useState<boolean>(false);
  const bookmark = arr.findIndex((c) => c.value === check);
  return (
    <>
      <TouchableOpacity
        style={[
          {
            width: "100%",
            height: 45,
            borderWidth: 1,
            borderColor: "#E3E6E8",
            borderRadius: 35,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: "8%",
            marginVertical: 12.5,
          },
          style,
        ]}
        onPress={() => {
          SetVis(true);
        }}
      >
        <ArrowDown />
        <CustomeText myStyle={{ fontSize: 15, color: "#707070" }}>
          {check === "" ? title : arr[bookmark].label}
        </CustomeText>
      </TouchableOpacity>

      <ModalWrapper
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 30,
          overflow: "hidden",
          alignItems: "center",
        }}
        animIn={"fadeInDown"}
        animOut={"fadeOutUp"}
        visible={vis}
        setVisible={SetVis}
      >
        <>
          {arr.map((i, x) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                SetCheck(i.value);
                SetVis(false);
              }}
              style={{
                width: "100%",
                borderWidth: 1,
                borderTopWidth: x === 0 ? 1 : 0,
                borderColor: "#E3E6E8",
                padding: 10,
                backgroundColor: i.value === check ? "#E3E6E8" : "white",
              }}
              key={x}
            >
              <View>
                <CustomeText myStyle={{ textAlign: "center" }}>
                  {i.label}
                </CustomeText>
              </View>
            </TouchableOpacity>
          ))}
        </>
      </ModalWrapper>
    </>
  );
};

export default CustomeCategory;
