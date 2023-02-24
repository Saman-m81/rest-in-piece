import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { FC } from "react";
import { View } from "react-native";
import CourseDetail from "../Landing/Courses/CourseDetail";
import NavigatorTab from "./NavigatorTab";

const NavigatorDrawer: FC = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={() => (
        <View
          style={{ width: "100%", height: "100%", backgroundColor: "red" }}
        ></View>
      )}
      screenOptions={{
        overlayColor: "rgba(0,57,152,0.5)",
        drawerStyle: {
          width: "56%",
          borderBottomLeftRadius: 35,
          borderTopLeftRadius: 35,
          overflow: "hidden",
        },
        drawerPosition: "right",
        headerShown: false,
        drawerType: "front",
      }}
    >
      <Drawer.Screen name="drawer" component={NavigatorTab} />
      <Drawer.Screen name="CourseDetail" component={CourseDetail} />
    </Drawer.Navigator>
  );
};
export default NavigatorDrawer;
