import React, { FC, useState, useRef } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import Wellcome from "../Log/Wellcome";
import LoginLayout from "../Log/LogIn/LoginLayout";
import SignUpStep1Layout from "../Log/SignUp/SignUpStep1Layout";
import SignUpStep2Layout from "../Log/SignUp/SignUpStep2Layout";
import ResetPassLayout from "../Log/ResetPass/ResetPassLayout";
import NavigatorDrawer from "./NavigatorDrawer";

const Stack = createNativeStackNavigator();

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Wellcome"
        screenOptions={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarColor: "transparent",
          statusBarStyle: "dark",
        }}
      >
        <Stack.Screen name="Wellcome" component={Wellcome} />
        <Stack.Screen
          name="LogIn"
          options={{ animation: "slide_from_right" }}
          component={LoginLayout}
        />
        <Stack.Screen
          name="SignUp1"
          options={{ animation: "slide_from_left" }}
          component={SignUpStep1Layout}
        />
        <Stack.Screen
          name="SignUp2"
          options={{ animation: "slide_from_right" }}
          component={SignUpStep2Layout}
        />
        <Stack.Screen
          name="ResetPassword"
          options={{ animation: "none" }}
          component={ResetPassLayout}
        />
        <Stack.Screen
          options={{
            statusBarTranslucent: true,
            statusBarColor: "transparent",
            statusBarStyle: "light",
          }}
          name="Courses"
          component={NavigatorDrawer}
        />
        <Stack.Screen name="dr" component={NavigatorDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Navigator };
