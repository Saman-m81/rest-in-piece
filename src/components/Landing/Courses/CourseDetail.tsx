import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { FC } from "react";
import CustomeText from "../../common/CustomeText";
import Plus from "../../../assets/image/plus.svg";
import Btn from "../../common/Btn";
import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "jalali-moment";
import { HandleDescription } from "../../common/handleDec";
import LaziImageLoader from "../../common/imageloader/LaziImageLoader";
import DrawerIcon from "../../../assets/image/dialpad.svg";
import Heart from "../../../assets/image/heart.svg";
import Heartfat from "../../../assets/image/redHeart.svg";
import Comments from "./Comments";

type Props = {};
interface courseComment extends Array<comment> {}
interface items {
  title: string;
  teacher: {
    fullName: string;
    profile: string;
  };
  cost: number;
  lesson: {
    image: string;
  };
  startDate: Date;
  endDate: Date;
  students: object[];
  capacity: number;
}
interface comment {
  postId: string;
  username: string;
  comment: string;
  _id: string;
}
const CourseDetail: FC<Props> = ({}) => {
  const { height, width } = useWindowDimensions();
  const navbarHeight = (31 * height) / 100;
  const route = useRoute();
  const CourseItem: items = route.params?.Course;
  const CourseComment: courseComment = route.params?.comment;
  const fix = moment.from(CourseItem.endDate.toString(), "fa");
  const CorseDateForm =
    (new Date(fix.format()).getTime() - new Date().getTime()) /
    (1000 * 3600 * 24);
  const CorseDate =
    CorseDateForm <= 0
      ? "منسوخ"
      : CorseDateForm < 30
      ? "( " + Math.floor(CorseDateForm) + " روز )"
      : "( " +
        Math.floor(CorseDateForm / 30) +
        "ماه و " +
        Math.floor(CorseDateForm % 30) +
        "روز )";

  const navigation = useNavigation();
  return (
    <>
      <View>
        <View
          style={{
            top: 0,
            height: navbarHeight,
            backgroundColor: "white",
          }}
        >
          <LaziImageLoader
            style={{
              width: "100%",
              height: "100%",
              alignSelf: "center",
            }}
            src={CourseItem.lesson.image}
          />
          <View
            style={{
              width: "100%",
              top: 40,
              zIndex: 2,
              position: "absolute",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 30,
              elevation: 10,
            }}
          >
            <Btn
              Vstyle={styles.circle}
              Tstyle={{ display: "none" }}
              children={<Heart fill={"#03B9FF"} width={22} height={22} />}
            />
            <Btn
              Press={() => navigation.openDrawer()}
              Vstyle={styles.circle}
              Tstyle={{ display: "none" }}
              children={<DrawerIcon fill={"#03B9FF"} width={22} height={22} />}
            />
          </View>
        </View>
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
          zIndex: 10,
        }}
      >
        <CustomeText myStyle={{ color: "#fff", fontSize: 20 }}>
          افزودن به سبد خرید
        </CustomeText>
      </TouchableOpacity>
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          top: -40,
          paddingHorizontal: 30,
          elevation: 10,
        }}
      >
        <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
          <LaziImageLoader
            src={CourseItem.teacher.profile}
            style={{
              width: 70,
              height: 70,
              borderRadius: 70,
              resizeMode: "cover",
              top: -35,
            }}
          />
          <View style={{ marginRight: 4 }}>
            <CustomeText
              myStyle={{
                fontSize: 15,
                color: "#777777",
                marginRight: 11,
                textAlign: "right",
              }}
            >
              {HandleDescription(CourseItem.teacher.fullName, 20)}
            </CustomeText>
            <CustomeText
              myStyle={{ fontSize: 20, color: "#002D85", textAlign: "right" }}
            >
              {HandleDescription(CourseItem.title, 20)}
            </CustomeText>
          </View>
        </View>
        <View
          style={{
            alignSelf: "center",
            width: "90%",
            height: 1,
            elevation: 4,
            backgroundColor: "white",
            marginBottom: 25,
          }}
        ></View>
        <ScrollView>
          <View style={{ paddingBottom: 15, paddingHorizontal: 30 }}>
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <CustomeText myStyle={{ fontSize: 13, color: "#8F8F8F" }}>
                تاریخ شروع :
              </CustomeText>
              <CustomeText
                myStyle={{
                  fontSize: 15,
                  color: "#002D85",
                }}
              >
                {new Date(CourseItem.startDate).toLocaleDateString("en-Us", {
                  day: "2-digit",
                }) +
                  "/" +
                  new Date(CourseItem.startDate).toLocaleDateString("fa-IR", {
                    month: "long",
                  }) +
                  "/" +
                  new Date(CourseItem.startDate).toLocaleDateString("en-Us", {
                    year: "numeric",
                  })}
              </CustomeText>
            </View>
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View style={{ flexDirection: "row-reverse" }}>
                <CustomeText
                  myStyle={{ fontSize: 13, color: "#8F8F8F", marginLeft: 5 }}
                >
                  دانشجو :
                </CustomeText>
                <CustomeText myStyle={{ fontSize: 15, color: "#002D85" }}>
                  {CourseItem.students.length + " نفر"}
                </CustomeText>
              </View>
              <View style={{ flexDirection: "row-reverse" }}>
                <CustomeText
                  myStyle={{ fontSize: 13, color: "#8F8F8F", marginLeft: 5 }}
                >
                  ظرفیت :
                </CustomeText>
                <CustomeText myStyle={{ fontSize: 15, color: "#002D85" }}>
                  {CourseItem.capacity + " نفر"}
                </CustomeText>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <CustomeText myStyle={{ fontSize: 13, color: "#3D5FA2" }}>
                {CorseDate.toString()}
              </CustomeText>
              <CustomeText myStyle={{ fontSize: 29, color: "#CE3E2E" }}>
                {CourseItem.cost + " ت"}
              </CustomeText>
            </View>

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
                    myStyle={{
                      fontSize: 13,
                      color: "#009EDA",
                      marginLeft: 5,
                    }}
                  >
                    نظر جدید
                  </CustomeText>
                </View>
                <CustomeText myStyle={{ fontSize: 15, color: "#3D5FA2" }}>
                  نظرات کاربران:
                </CustomeText>
              </View>
            </View>
            {CourseComment.length !== 0
              ? CourseComment.map((comments) => (
                  <Comments
                    key={comments._id}
                    comment={comments.comment}
                    postId={comments.postId}
                    username={comments.username}
                  />
                ))
              : null}

            <View style={{ height: 300 }} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  circle: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
