import {
  StyleSheet,
  View,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import {
  ParamListBase,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { Anim } from "../../common/Animation";
import Search from "./../../common/Search/Search";
import Shop from "../../../assets/image/shop.svg";
import Category from "../../../assets/image/category.svg";
import Filter from "../../Modal/Filter";

type Props = {
  route: RouteProp<ParamListBase, string>;
  click: boolean;
  HeightDecrease: Animated.Value;
  PaddingDecrease: Animated.Value;
  HeightGrow: Animated.Value;
  PaddingGrow: Animated.Value;
  courseNavHeight: number;
  navHeight: number;
};

// const isFocused = useIsFocused();
const Navbar: FC<Props> = ({
  route,
  click,
  HeightDecrease,
  PaddingDecrease,
  HeightGrow,
  PaddingGrow,
  courseNavHeight,
  navHeight,
}) => {
  const navigation = useNavigation();
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    if (route.name === "Course") {
      if (click) {
        Anim(HeightGrow, courseNavHeight, 800);
        Anim(PaddingGrow, navHeight, 500);
      } else {
        Anim(HeightGrow, navHeight, 0);
        Anim(PaddingGrow, 0, 0);
      }
    }
  }, [click]);
  return (
    <Animated.View
      style={{
        ...styles.navbar,
        height: route.name === "Course" ? HeightGrow : HeightDecrease,
        paddingTop: route.name === "Course" ? PaddingGrow : PaddingDecrease,
      }}
    >
      <Filter visible={modal} setVisible={setModal} />
      {route.name === "Course" ? (
        <>
          <TouchableOpacity
            onPress={() => {
              setModal(true);
            }}
            style={styles.circle}
          >
            <Category />
          </TouchableOpacity>
          <Search />
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={styles.circle}
          >
            <Shop />
          </TouchableOpacity>
        </>
      ) : null}
    </Animated.View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: "#4f91ff",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  circle: {
    backgroundColor: "white",
    width: 37,
    height: 37,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
