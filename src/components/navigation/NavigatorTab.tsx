import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC, useRef, useState } from "react";
import { Animated, useWindowDimensions, View } from "react-native";
import Dialpad from "../../assets/image/dialpad.svg";
import { Anim } from "../common/Animation";
import Cart from "../Landing/Cart/Cart";
import Courses from "../Landing/Courses/Courses";
import Navbar from "../Landing/Courses/Navbar";
import Fave from "../Landing/Fave/Fave";
import CartSvg from "../../assets/image/cart.svg";
import Heart from "../../assets/image/heart.svg";
import File from "../../assets/image/file.svg";

const NavigatorTab: FC = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  const [click, setClick] = useState<boolean>(true);
  const { height, width } = useWindowDimensions();
  const navHeight = (6 * height) / 100;
  const courseNavHeight = (15 * height) / 100;

  const HeightGrow = useRef(new Animated.Value(navHeight)).current;
  const PaddingGrow = useRef(new Animated.Value(0)).current;
  const HeightDecrease = useRef(new Animated.Value(courseNavHeight)).current;
  const PaddingDecrease = useRef(new Animated.Value(navHeight)).current;
  return (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName="Course"
      screenOptions={{
        header: ({ route }) => (
          <Navbar
            navHeight={navHeight}
            courseNavHeight={courseNavHeight}
            route={route}
            click={click}
            HeightGrow={HeightGrow}
            PaddingGrow={PaddingGrow}
            HeightDecrease={HeightDecrease}
            PaddingDecrease={PaddingDecrease}
          />
        ),
        headerTitleStyle: { display: "none" },
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          backgroundColor: "#4f91ff",
          height: "7.5%",
        },
      }}
    >
      <Tab.Screen
        name="Fave"
        component={Fave}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Heart fill="white" style={{ opacity: focused ? 1 : 0.5 }} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CartSvg fill="white" style={{ opacity: focused ? 1 : 0.5 }} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Course"
        component={Courses}
        listeners={{
          tabPress: () => {
            setClick(true);
            Anim(HeightDecrease, courseNavHeight, 0);
            Anim(PaddingDecrease, navHeight, 0);
          },
          blur: () => {
            setClick(false);
            Anim(HeightDecrease, navHeight, 500);
            Anim(PaddingDecrease, 0, 500);
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => {
            return <File fill="white" style={{ opacity: focused ? 1 : 0.5 }} />;
          },
        }}
      />
      <Tab.Screen
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.openDrawer();
          },
        }}
        name="draw"
        children={() => <View style={{}}></View>}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Dialpad fill="white" style={{ opacity: focused ? 1 : 0.5 }} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigatorTab;
