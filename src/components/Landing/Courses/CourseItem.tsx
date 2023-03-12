import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import CustomText from "../../common/CustomeText";
import React, { useState, FC, memo } from "react";
import Heart from "../../../assets/image/heart.svg";
import Heartfat from "../../../assets/image/redHeart.svg";
import Doctor from "../../../assets/image/doctor.svg";
import Coin from "../../../assets/image/coin.svg";
import Plus from "../../../assets/image/plus.svg";
import { HandleDescription } from "../../common/handleDec";
import Btn from "../../common/Btn";
import { useNavigation } from "@react-navigation/native";
import LaziImageLoader from "../../common/imageloader/LaziImageLoader";
import CustomeText from "../../common/CustomeText";
type Props = {
  index: number;
  item: object;
  comments: Array<commentsDatas>;
};

interface items {
  _id: string;
  title: string;
  teacher: {
    fullName: string;
  };
  cost: number;
  lesson: {
    image: string;
  };
}
interface commentsDatas {
  postId: string;
}

const CourseItem: FC<Props> = memo(
  ({ index, item, comments }) => {
    const [liked, setliked] = useState<boolean>(true);
    const Course = item as items;
    const Comments = comments;
    const [Err, SetErr] = useState<boolean>(false);
    const navigate = useNavigation();
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigate.navigate("CourseDetail", {
            Course: item,
            comment: Comments?.filter(
              (comment) => comment.postId === Course._id
            ),
          })
        }
      >
        <View
          style={{
            width: "100%",
            height: 110,
            position: "relative",
            marginBottom: 23,
            paddingHorizontal: 10,
            marginTop: index === 0 ? 10 : 0,
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: "white",
              borderRadius: 20,
              height: "100%",
              elevation: 8,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row-reverse",
              overflow: "hidden",
            }}
          >
            <View
              style={{
                paddingVertical: 5,
                backgroundColor: "white",
                height: "100%",
                flexDirection: "row-reverse",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View style={{ justifyContent: "space-between" }}>
                <View
                  style={{
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingRight: 15,
                    paddingLeft: 38,
                  }}
                >
                  <CustomeText myStyle={{ fontSize: 17 }}>
                    {HandleDescription(Course.title, 18)}
                  </CustomeText>
                </View>
                <View
                  style={{
                    paddingRight: 47,
                    paddingLeft: 8,
                    paddingTop: 18,
                    justifyContent: "space-between",
                    // alignItems: "flex-end",
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      alignSelf: "flex-end",
                      flexDirection: "row",
                    }}
                  >
                    <CustomText
                      myStyle={{
                        fontSize: 12,
                        marginRight: 6,
                        color: "#696969",
                      }}
                    >
                      {Course.teacher.fullName}
                    </CustomText>
                    <Doctor />
                  </View>
                  <View
                    style={{
                      paddingTop: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      alignSelf: "flex-end",
                    }}
                  >
                    <CustomeText
                      myStyle={{
                        fontSize: 12,
                        marginRight: 2,
                        color: "#696969",
                      }}
                    >
                      ت
                    </CustomeText>
                    <CustomText
                      myStyle={{
                        fontSize: 12,
                        marginRight: 6,
                        color: "#E00000",
                      }}
                    >{`${Course.cost}`}</CustomText>
                    <Coin />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "column-reverse",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: 8,
                }}
              >
                <Btn
                  Tstyle={{ display: "none" }}
                  Vstyle={{
                    width: 35,
                    height: 35,
                    backgroundColor: "#4F91FF",
                    borderRadius: 30,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  Press={() => {}}
                  children={<Plus />}
                />

                {liked ? (
                  <Heart
                    width={22}
                    height={20}
                    fill={"#ccc"}
                    onPress={() => setliked(false)}
                  />
                ) : (
                  <Heartfat
                    fill={"red"}
                    width={22}
                    height={20}
                    onPress={() => setliked(true)}
                  />
                )}
              </View>
            </View>
          </View>
          <View
            style={{
              width: 70,
              height: "100%",
              borderRadius: 70,
              position: "absolute",
              zIndex: 1,
              justifyContent: "center",
              right: 0,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                elevation: 2,
                width: 70,
                height: 70,
                borderRadius: 70,
              }}
            >
              <LaziImageLoader
                src={Course.lesson.image}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 70,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) => prevProps.item === nextProps.item
);

export default CourseItem;

const styles = StyleSheet.create({});
