import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { FC } from "react";
import CourseDetail from "../components/Landing/Courses/CourseDetail";
import NavigatorTab from "./NavigatorTab";
import MyDrawer from "./../components/Panel/MyDrawer";
const NavigatorDrawer: FC = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={MyDrawer}
      screenOptions={{
        overlayColor: "rgba(0,57,152,0.5)",
        drawerStyle: {
          width: "60%",
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
      <Drawer.Screen
        options={{ lazy: true, swipeEnabled: true, swipeEdgeWidth: 100 }}
        name="CourseDetail"
        component={CourseDetail}
      />
    </Drawer.Navigator>
  );
};
export default NavigatorDrawer;
