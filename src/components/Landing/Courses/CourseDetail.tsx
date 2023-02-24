import {
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";
import React, { FC } from "react";
import CustomeText from "../../common/CustomeText";
import Plus from "../../../assets/image/plus.svg";

interface Props {}

const CourseDetail: FC<Props> = ({}) => {
  const { height, width } = useWindowDimensions();
  const navbarHeight = (31 * height) / 100;
  return (
    <>
      <View style={{}}>
        <View
          style={{
            top: 0,
            height: navbarHeight,
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
            backgroundColor: "#4f91ff",
            overflow: "hidden",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "red",
              alignSelf: "center",
            }}
            // source={}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            alignSelf: "center",
            position: "absolute",
            top: 50,
            width: "70%",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              height: (height * 35) / 100,
              top: 70,
              paddingHorizontal: "6.7%",
              paddingTop: "7%",
              paddingBottom: "6.5%",
              elevation: 10,
            }}
          >
            <View style={{ marginTop: 50 }}>
              <CustomeText myStyle={{ color: "#002D85", fontSize: 20 }}>
                دوره جامع React JS
              </CustomeText>
              <CustomeText
                myStyle={{ color: "#777777", fontSize: 15, marginTop: 5 }}
              >
                دکتر محمد بحرالعلوم
              </CustomeText>
            </View>
            <View
              style={{
                width: "100%",
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: "#777777",
                marginVertical: 12,
              }}
            />
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                height: "13%",
              }}
            >
              <View
                style={{
                  width: "45%",
                  borderWidth: 1,
                  borderRadius: 35,
                  height: "100%",
                  borderColor: "#B6C7E7",
                  backgroundColor: "#F6F9FF",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignContent: "center",
                  flexDirection: "row",
                  paddingHorizontal: 7,
                }}
              >
                <CustomeText myStyle={{ fontSize: 13, color: "#3D5FA2" }}>
                  95 نفر
                </CustomeText>
                <CustomeText myStyle={{ fontSize: 13, color: "#8F8F8F" }}>
                  دانشجو:
                </CustomeText>
              </View>
              <View
                style={{
                  width: "45%",
                  borderWidth: 1,
                  borderRadius: 35,
                  height: "100%",
                  borderColor: "#B6C7E7",
                  backgroundColor: "#F6F9FF",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignContent: "center",
                  flexDirection: "row",
                  paddingHorizontal: 7,
                }}
              >
                <CustomeText myStyle={{ fontSize: 13, color: "#3D5FA2" }}>
                  95 نفر
                </CustomeText>
                <CustomeText myStyle={{ fontSize: 13, color: "#8F8F8F" }}>
                  ظرفیت:
                </CustomeText>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                borderWidth: 1,
                borderRadius: 35,
                height: "13%",
                borderColor: "#B6C7E7",
                backgroundColor: "#F6F9FF",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "row",
                paddingHorizontal: 7,
                marginVertical: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <CustomeText myStyle={{ fontSize: 13, color: "#3D5FA2" }}>
                  ت
                </CustomeText>
                <CustomeText myStyle={{ fontSize: 15, color: "#E00000" }}>
                  450000
                </CustomeText>
              </View>
              <CustomeText myStyle={{ fontSize: 13, color: "#8F8F8F" }}>
                قیمت:
              </CustomeText>
            </View>
            <View
              style={{
                width: "100%",
                borderWidth: 1,
                borderRadius: 35,
                height: "13%",
                borderColor: "#B6C7E7",
                backgroundColor: "#F6F9FF",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "row",
                paddingHorizontal: 7,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <CustomeText myStyle={{ fontSize: 15, color: "#002D85" }}>
                  1401/10/23
                </CustomeText>
                <CustomeText myStyle={{ fontSize: 13, color: "#3D5FA2" }}>
                  (2 ماهه)
                </CustomeText>
              </View>
              <CustomeText myStyle={{ fontSize: 13, color: "#8F8F8F" }}>
                تاریخ شروع:
              </CustomeText>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          top: 180,
          width: "70%",
          // backgroundColor: "red",
          overflow: "hidden",
          height: "43%",
          alignSelf: "center",
        }}
      >
        <ScrollView>
          <View>
            <CustomeText myStyle={{ fontSize: 15, color: "#3D5FA2" }}>
              توضیحات دوره:
            </CustomeText>
            <CustomeText
              myStyle={{ fontSize: 12, color: "#818181", marginTop: 10 }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و
            </CustomeText>
            <CustomeText
              myStyle={{
                fontSize: 13,
                color: "#009EDA",
                alignSelf: "flex-start",
              }}
            >
              بیشتر ...
            </CustomeText>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                height: 30,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#03B9FF",
                    width: 30,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                  }}
                >
                  <Plus />
                </View>
                <CustomeText
                  myStyle={{ fontSize: 13, color: "#009EDA", marginLeft: 5 }}
                >
                  نظر جدید
                </CustomeText>
              </View>
              <CustomeText myStyle={{ fontSize: 15, color: "#3D5FA2" }}>
                نظرات کاربران:
              </CustomeText>
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          width: (width * 84) / 100,
          height: (height * 6.5) / 100,
          alignSelf: "center",
          bottom: 15,
          position: "absolute",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "#04A641",
          borderRadius: 30,
        }}
      >
        <CustomeText myStyle={{ color: "#fff", fontSize: 20 }}>
          افزودن به سبد خرید
        </CustomeText>
      </TouchableOpacity>
    </>
  );
};

export default CourseDetail;
