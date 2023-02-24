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
import { useDebounce } from "use-debounce";
import MyStore from "../../../store/Store";
import { useIsFocused } from "@react-navigation/native";
import { inject, observer } from "mobx-react";

interface ItemCourses {
  title: string;
  teacher: {
    fullName: string;
  };
  cost: number;
}

const Courses: FC = ({}) => {
  const isFocused = useIsFocused();
  const [refresh, SetRefresh] = useState<boolean>(false);
  const rotation = useRef(new Animated.Value(0)).current;
  const RefreshRotation = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const { data, refetch, isFetching, isError, isLoading, isRefetchError } =
    useQuery("Courses", GetAllCourses);
  const [debouncedValue] = useDebounce(MyStore?.getSomeData(), 500);
  const CourseItems = data as [ItemCourses] | undefined;
  useEffect(() => {
    MyStore?.setSomeData("");
  }, [isFocused]);
  return (
    <View>
      {isLoading || !CourseItems ? (
        [0, 1, 2, 3, 4].map((_, index) => <SkeletonCourseItem key={index} />)
      ) : (
        <View>
          <FlatList
            style={styles.holder}
            data={CourseItems.filter((c) => {
              if (debouncedValue) {
                return debouncedValue === ""
                  ? c
                  : c.title.toLowerCase().includes(debouncedValue);
              } else {
                return c;
              }
            })}
            ListEmptyComponent={() => <CustomText>Empty</CustomText>}
            extraData={0}
            renderItem={({ item, index }) => (
              <CourseItem item={item} index={index} />
            )}
            maxToRenderPerBatch={5}
            refreshing={refresh}
            onRefresh={() => {
              SetRefresh(true);
              refetch().then(() => {
                SetRefresh(false);
              });
            }}
            contentContainerStyle={{ paddingBottom: 23 }}
            onEndReachedThreshold={0.1}
            ListFooterComponentStyle={{
              paddingBottom: 15,
            }}
            ListFooterComponent={
              <>
                {isRefetchError ? (
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
                ) : (
                  <CustomText myStyle={{ textAlign: "center" }}>
                    The End
                  </CustomText>
                )}
              </>
            }
          />
        </View>
      )}
    </View>
  );
};

export default observer(Courses);

const styles = StyleSheet.create({
  holder: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },
});
