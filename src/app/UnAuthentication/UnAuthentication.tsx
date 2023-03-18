import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import Wellcome from "../../components/Log/Wellcome";
import LoginLayout from "../../components/Log/LogIn/LoginLayout";
import SignUpStep1Layout from "../../components/Log/SignUp/SignUpStep1Layout";
import SignUpStep2Layout from "../../components/Log/SignUp/SignUpStep2Layout";
import ResetPassLayout from "../../components/Log/ResetPass/ResetPassLayout";
import NavigatorDrawer from "../../navigation/NavigatorDrawer";

const Stack1 = createNativeStackNavigator();

const UnAuthentication: FC = () => {
  return (
    <NavigationContainer>
      <Stack1.Navigator
        initialRouteName="Wellcome"
        screenOptions={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarColor: "transparent",
          statusBarStyle: "dark",
        }}
      >
        <Stack1.Screen name="Wellcome" component={Wellcome} />
        <Stack1.Screen
          name="LogIn"
          options={{ animation: "slide_from_right" }}
          component={LoginLayout}
        />
        <Stack1.Screen
          name="SignUp1"
          options={{ animation: "slide_from_left" }}
          component={SignUpStep1Layout}
        />
        <Stack1.Screen
          name="SignUp2"
          options={{ animation: "slide_from_right" }}
          component={SignUpStep2Layout}
        />
        <Stack1.Screen
          name="ResetPassword"
          options={{ animation: "none" }}
          component={ResetPassLayout}
        />
        <Stack1.Screen
          options={{
            statusBarTranslucent: true,
            statusBarColor: "transparent",
            statusBarStyle: "light",
          }}
          name="Courses"
          component={NavigatorDrawer}
        />
      </Stack1.Navigator>
    </NavigationContainer>
  );
};

export { UnAuthentication };
