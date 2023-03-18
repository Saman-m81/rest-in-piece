import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import NavigatorDrawer from "../../navigation/NavigatorDrawer";
import { useWindowDimensions } from "react-native";

const Stack = createNativeStackNavigator();

const Authentication: FC = () => {
  const { height, width } = useWindowDimensions();
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
        <Stack.Screen
          options={{
            statusBarTranslucent: true,
            statusBarColor: "transparent",
            statusBarStyle: "light",
          }}
          name="Courses"
          component={NavigatorDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Authentication };
