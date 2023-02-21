import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  Animated,
} from "react-native";
import React, { FC, useState, useEffect, useRef } from "react";
import CourseItem from "../../Landing/Courses/CourseCard";
import { useQuery } from "react-query";
import { GetAllCourses } from "../../../utils/core/Services/api/GetAllCourses";
import CustomText from "../../common/CustomeText";
import ArrowRefresh from "../../../assets/image/spinner.svg";
import { AnimLoop } from "../../common/Animation";
import SkeletonCourseItem from "../../common/SkeletonCourseItem";

type Props = {};
interface Item {
  courses: Array<object>;
  count: number;
}

const Courses: FC<Props> = ({}) => {
  const [refresh, SetRefresh] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [array, SetArray] = useState<object[]>([]);
  const rotation = useRef(new Animated.Value(0)).current;
  const RefreshRotation = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const { data, refetch, isFetching, isError, isRefetchError } = useQuery(
    ["Courses", page],
    () => GetAllCourses(page, 6),
    {
      keepPreviousData: false,
    }
  );

  const CourseItems = data as Item | undefined;

  useEffect(() => {
    if (!isFetching) {
      if (!isError) {
        if (CourseItems?.courses) {
          if (page === 1) {
            SetArray([...CourseItems.courses]);
          } else SetArray([...array, ...CourseItems.courses]);
        }
      }
    }
  }, [isFetching]);

  return (
    <View>
      {array.length === 0 ? (
        [0, 1, 2, 3, 4].map((_, index) => <SkeletonCourseItem key={index} />)
      ) : (
        <View>
          <FlatList
            style={styles.holder}
            data={array}
            ListEmptyComponent={() => <CustomText>Error</CustomText>}
            extraData={0}
            renderItem={({ item, index }) => (
              <CourseItem item={item} index={index} />
            )}
            maxToRenderPerBatch={5}
            refreshing={refresh}
            onRefresh={() => {
              SetRefresh(true);
              setPage(1);
              refetch().then(() => {
                SetRefresh(false);
              });
            }}
            onEndReached={() => {
              if (CourseItems) {
                if (CourseItems.count - page * 6 > 0) {
                  if (!isFetching) {
                    setPage(page + 1);
                  }
                }
              }
            }}
            contentContainerStyle={{ paddingBottom: 23 }}
            onEndReachedThreshold={0.1}
            ListFooterComponentStyle={{
              paddingBottom: 15,
            }}
            ListFooterComponent={
              <>
                {isError ? (
                  <Pressable
                    onPress={() => {
                      AnimLoop(rotation, 360, 1000, 0, false);
                      refetch().then(() => {
                        AnimLoop(rotation, 360, 1000, 500, true);
                      });
                    }}
                  >
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "white",
                        borderRadius: 40,
                        elevation: 5,
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                      }}
                    >
                      <Animated.View
                        style={{
                          width: 20,
                          height: 20,
                          transform: [{ rotate: RefreshRotation }],
                        }}
                      >
                        <ArrowRefresh
                          width={"100%"}
                          height={"100%"}
                          fill={"#3A84FF"}
                        />
                      </Animated.View>
                    </View>
                  </Pressable>
                ) : array.length === CourseItems?.count ? (
                  <CustomText myStyle={{ textAlign: "center" }}>
                    The End
                  </CustomText>
                ) : (
                  <ActivityIndicator color={"#3A84FF"} />
                )}
              </>
            }
          />
        </View>
      )}
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  holder: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },
});
