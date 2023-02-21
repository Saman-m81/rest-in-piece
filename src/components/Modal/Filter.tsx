import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Button,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { FC } from "react";
import CustomeText from "../common/CustomeText";
import Modal from "react-native-modal";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import ArrowDown from "../../assets/image/arrowDown.svg";
import { SvgProps } from "react-native-svg";

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: FC<Props> = ({ visible, setVisible }) => {
  const { height } = useWindowDimensions();
  return (
    <>
      <Modal
        backdropColor="rgba(0,57,152,.55)"
        onBackButtonPress={() => setVisible(false)}
        deviceHeight={height + 50}
        statusBarTranslucent
        animationIn={"fadeInLeftBig"}
        animationOut={"fadeOutRightBig"}
        animationOutTiming={1000}
        animationInTiming={1000}
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: "8%",
          paddingVertical: "8.5%",
        }}
        isVisible={visible}
      >
        <View
          style={{
            borderRadius: 30,
            backgroundColor: "white",
            width: "100%",
            // height: "100%",
            paddingHorizontal: "10%",
            paddingVertical: "5.5%",
          }}
        >
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
      </Modal>
    </>
  );
};
// react - native - skeleton - placeholder
// native - base(modal)
// react+native+multi+slider npm pto
// bottom sheet modal

export default Filter;

const styles = StyleSheet.create({});
interface Props2 {
  title: string;
  style?: StyleProp<ViewStyle>;
}
const CustomeCategory: FC<Props2> = ({ title, style }) => {
  return (
    <>
      <Pressable
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
