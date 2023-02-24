import {
  Pressable,
  StyleProp,
  View,
  ViewStyle,
  TouchableOpacity,
  useWindowDimensions,
  GestureResponderEvent,
} from "react-native";
import React, { FC, useState } from "react";
import CustomeText from "../common/CustomeText";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import ArrowDown from "../../assets/image/arrowDown.svg";
import ModalWrapper from "../common/ModalWrapper";

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: FC<Props> = ({ visible, setVisible }) => {
  const { height } = useWindowDimensions();
  return (
    <>
      <ModalWrapper setVisible={setVisible} visible={visible}>
        <View>
          <CustomeCategory title="مرتب سازی" />
          <CustomeCategory title="روند نمایش" />
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              borderColor: "#E3E6E8",
              marginVertical: 20,
            }}
          />
          <CustomeText myStyle={{ fontSize: 15, color: "#707070" }}>
            محدوده قیمت
          </CustomeText>
          <MultiSlider
            isMarkersSeparated={true}
            min={0}
            max={500000}
            values={[1, 500000]}
            sliderLength={220}
          />
          <CustomeText myStyle={{ fontSize: 15, color: "#707070" }}>
            محدوده ظرفیت
          </CustomeText>
          <MultiSlider
            isMarkersSeparated={true}
            min={0}
            max={100}
            values={[1, 100]}
            sliderLength={220}
          />

          <View
            style={{
              width: "100%",
              borderWidth: 1,
              borderColor: "#E3E6E8",
              marginVertical: 20,
            }}
          />
          <CustomeCategory title="روند نمایش" />
          <CustomeCategory title="روند نمایش" />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: "12.5%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}
              style={{
                width: "45%",
                height: 40,
                borderWidth: 1.5,
                borderColor: "#FF0000",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomeText myStyle={{ fontSize: 15, color: "#FF0000" }}>
                بازگشت
              </CustomeText>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                width: "45%",
                height: 40,
                borderRadius: 20,
                backgroundColor: "#04A641",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomeText myStyle={{ fontSize: 15, color: "#fff" }}>
                فیلتر
              </CustomeText>
            </TouchableOpacity>
          </View>
        </View>
      </ModalWrapper>
    </>
  );
};

export default Filter;

interface Props2 {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}
const CustomeCategory: FC<Props2> = ({ title, style, onPress }) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Pressable
        onPress={onPress}
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
      >
        <ArrowDown />
        <CustomeText myStyle={{ fontSize: 15, color: "#707070" }}>
          {title}
        </CustomeText>
      </Pressable>
    </>
  );
};
