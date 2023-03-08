import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import React, { FC, useState, useEffect, useRef } from "react";
import CourseItem from "../Courses/CourseItem";
import { useQueries, useQuery } from "react-query";
import { GetAllCourses } from "../../../utils/core/Services/api/GetAllCourses";
import ArrowRefresh from "../../../assets/image/spinner.svg";
import { AnimLoop } from "../../common/Animation";
import { observer } from "mobx-react";
import { useIsFocused } from "@react-navigation/native";
import { useDebounce } from "use-debounce";
import rootStore from "../../../store/Store";
import SkeletonCourseItem from "../../common/SkeletonCourseItem";
import CustomeText from "../../common/CustomeText";
import { GetAllComments } from "../../../utils/core/Services/api/GetAllComments";
import Comments from "./Comments";

type Props = {};

interface ItemCourses {
  title: string;
  teacher: {
    fullName: string;
  };
  cost: number;
  lesson: {
    image: string;
  };
  startDate: Date;
  students: object[];
  capacity: number;
}
interface Comments {
  postId: string;
  username: string;
  comment: string;
  _id: string;
}

const Courses: FC<Props> = ({}) => {
  const [refresh, SetRefresh] = useState<boolean>(false);
  const rotation = useRef(new Animated.Value(0)).current;
  const isFocused = useIsFocused();
  const RefreshRotation = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const filteringStore = rootStore.filteringStore[0];
  const GetfilteringStore = rootStore.getFilteringData()[0];
  const [debouncedVal] = useDebounce(GetfilteringStore.somedata, 500);

  // const { data, refetch, isLoading, isError, isRefetchError, isRefetching } =
  //   useQuery("Courses", GetAllCourses);

  const result = useQueries([
    { queryKey: "Courses", queryFn: GetAllCourses },
    { queryKey: "Comments", queryFn: GetAllComments },
  ]);
  const { data, refetch, isLoading, isError, isRefetchError, isRefetching } =
    result[0];

  const {
    data: commentsData,
    isError: commentError,
    isLoading: commentLoading,
  } = result[1];

  const CourseItems = data as [ItemCourses] | undefined;
  const Comments = commentsData as [Comments] | undefined;

  useEffect(() => {
    if (CourseItems) {
      const max = CourseItems.sort((a, b) => b.cost - a.cost);
      filteringStore.setMax(max[0].cost);
      filteringStore.SetCost([0, max[0].cost]);
      const maxCapacity = CourseItems.sort((a, b) => b.capacity - a.capacity);
      filteringStore.setMaxCapacity(maxCapacity[0].capacity);
      filteringStore.SetCapacity([0, maxCapacity[0].capacity]);
    }
  }, [CourseItems]);

  useEffect(() => {
    filteringStore.SetData("");
  }, [isFocused]);

  const FilterMode = GetfilteringStore.isOn;

  const SortDir = FilterMode
    ? GetfilteringStore.SubmitFilter.sortdir === "asc"
      ? true
      : false
    : true;

  const SortOp =
    GetfilteringStore.SubmitFilter.searchOp === "Course" ? true : false;

  const Sort = GetfilteringStore.SubmitFilter.sort;

  const filterCourses = CourseItems?.filter((c) => {
    if (FilterMode) {
      if (debouncedVal === "") {
        return (
          c &&
          GetfilteringStore.SubmitFilter.cost[0] <= c.cost &&
          c.cost <= GetfilteringStore.SubmitFilter.cost[1] &&
          GetfilteringStore.SubmitFilter.capacity[0] <= c.capacity &&
          c.capacity <= GetfilteringStore.SubmitFilter.capacity[1]
        );
      } else {
        if (SortOp) {
          return (
            c.title.toLowerCase().includes(debouncedVal.toLowerCase()) &&
            GetfilteringStore.SubmitFilter.cost[0] <= c.cost &&
            c.cost <= GetfilteringStore.SubmitFilter.cost[1] &&
            GetfilteringStore.SubmitFilter.capacity[0] <= c.capacity &&
            c.capacity <= GetfilteringStore.SubmitFilter.capacity[1]
          );
        } else {
          return (
            c.teacher.fullName
              .toLowerCase()
              .includes(debouncedVal.toLowerCase()) &&
            GetfilteringStore.SubmitFilter.cost[0] <= c.cost &&
            c.cost <= GetfilteringStore.SubmitFilter.cost[1] &&
            GetfilteringStore.SubmitFilter.capacity[0] <= c.capacity &&
            c.capacity <= GetfilteringStore.SubmitFilter.capacity[1]
          );
        }
      }
    } else {
      if (debouncedVal === "") {
        return c; // &&  c.cost === "smth"
      } else return c.title.toLowerCase().includes(debouncedVal);
    }
  });

  const collator = new Intl.Collator("fa");

  const handleSorting = (): ItemCourses[] | undefined => {
    if (FilterMode) {
      if (filterCourses) {
        return Sort === "cost"
          ? filterCourses.sort(
              (a, b) =>
                (b.cost && b.cost ? b.cost : 0) -
                (a.cost && a.cost ? a.cost : 0)
            )
          : Sort === "name"
          ? filterCourses.sort((a, b) =>
              collator.compare(a.title, b.title) <
              collator.compare(b.title, a.title)
                ? -1
                : 1
            )
          : Sort === "date"
          ? filterCourses.sort(
              (a, b) =>
                new Date(b.startDate).getTime() -
                new Date(a.startDate).getTime()
            )
          : Sort === "students"
          ? filterCourses.sort(
              (a, b) =>
                (b.students.length && b.students.length
                  ? b.students.length
                  : 0) -
                (a.students.length && a.students.length ? a.students.length : 0)
            )
          : Sort === "cpacity"
          ? filterCourses.sort(
              (a, b) =>
                (b.capacity && b.capacity ? b.capacity : 0) -
                (a.capacity && a.capacity ? a.capacity : 0)
            )
          : filterCourses;
      }
    } else {
      return filterCourses;
    }
  };

  return (
    <View>
      {isLoading || !CourseItems || isRefetching || !filterCourses ? (
        <View style={{ paddingTop: 25 }}>
          {[1, 2, 3, 4, 5].map((x) => (
            <SkeletonCourseItem key={x} />
          ))}
        </View>
      ) : (
        <>
          <FlatList
            style={styles.holder}
            data={SortDir ? handleSorting() : handleSorting()?.reverse()}
            ListEmptyComponent={() => <CustomeText>empty</CustomeText>}
            extraData={0}
            renderItem={({ item, index }) => (
              <CourseItem comments={Comments} item={item} index={index} />
            )}
            maxToRenderPerBatch={5}
            initialNumToRender={5}
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
                      AnimLoop(rotation, 360, 1000, 0, Easing.linear, false);
                      refetch().then(() => {
                        AnimLoop(rotation, 360, 1000, 500, Easing.linear, true);
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
                  <CustomeText myStyle={{ textAlign: "center" }}>
                    The End
                  </CustomeText>
                )}
              </>
            }
          />
        </>
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
