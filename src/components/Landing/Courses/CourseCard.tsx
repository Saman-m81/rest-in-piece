import { StyleSheet, Text, View, Image } from "react-native";
import React, { FC, useEffect, useState } from "react";
import Heart from "../../../assets/image/like.svg";
import RedHeart from "../../../assets/image/redHeart.svg";
import Coin from "../../../assets/image/coin.svg";
import Doctor from "../../../assets/image/doctor.svg";
import Plus from "../../../assets/image/plus.svg";
import { HandleDescription } from "../../common/handleDec";
import CustomeText from "../../common/CustomeText";

type Props = {
  index: number;
  item: object;
};
interface items {
  title: string;
  teacher: {
    fullName: string;
  };
  cost: number;
  lesson: {
    image: string;
  };
}
const CourseCard: FC<Props> = ({ item, index }) => {
  const [heart, setHeart] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);
  const Course = item as items;
  return (
    <>
      <View
        style={{
          width: "100%",
          height: 110,
          marginBottom: index % 5 === 0 && index !== 0 ? 46 : 23,
          marginTop: index === 0 ? 10 : 0,
          paddingHorizontal: 10,
        }}
      >
        <View style={styles.card}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              paddingLeft: 5,
            }}
          >
            {heart ? (
              <RedHeart
                width={22}
                height={20}
                onPress={() => setHeart(!heart)}
              />
            ) : (
              <Heart width={22} height={20} onPress={() => setHeart(!heart)} />
            )}
            <CustomeText myStyle={styles.title}>
              {HandleDescription(Course.title, 18)}
            </CustomeText>
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <View style={{ alignSelf: "flex-end" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CustomeText
                  myStyle={{
                    fontSize: 12,
                    color: "#696969",
                    marginRight: 6,
                  }}
                >
                  {Course.teacher.fullName}
                </CustomeText>
                <Doctor />
              </View>
              <View
                style={{
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CustomeText myStyle={{ fontSize: 11, color: "#696969" }}>
                  ت
                </CustomeText>
                <CustomeText
                  myStyle={{
                    fontSize: 12,
                    marginRight: 6,
                    color: "#E00000",
                  }}
                >
                  {`${Course.cost}`}
                </CustomeText>
                <Coin />
              </View>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                width: 35,
                height: 35,
                backgroundColor: "#4f91ff",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Plus />
            </View>
          </View>
        </View>
        <View style={styles.img}>
          <View
            style={{ backgroundColor: "white", elevation: 2, borderRadius: 50 }}
          >
            <Image
              source={
                err
                  ? require("../../../assets/image/404.png")
                  : { uri: Course.lesson.image }
              }
              style={{
                height: 70,
                width: 70,
                backgroundColor: "white",
                borderRadius: 70,
              }}
              resizeMode="contain"
              onError={() => {
                setErr(true);
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 19,
    paddingRight: 38,
    paddingLeft: 15,
    paddingTop: 6,
    elevation: 8,
    justifyContent: "space-between",
    paddingBottom: 14,
  },
  title: { fontSize: 17, color: "#002D85" },
  img: {
    position: "absolute",
    height: "100%",
    right: 0,
    justifyContent: "center",
  },
});
