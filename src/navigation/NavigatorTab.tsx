import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC, useRef, useState, useEffect } from "react";
import { Animated, useWindowDimensions, View, BackHandler } from "react-native";
import Dialpad from "../assets/image/dialpad.svg";
import { Anim } from "../components/common/Animation";
import Cart from "../components/Landing/Cart/Cart";
import Courses from "../components/Landing/Courses/Courses";
import Navbar from "../components/Landing/Courses/Navbar";
import Fave from "../components/Landing/Fave/Fave";
import CartSvg from "../assets/image/cart.svg";
import Heart from "../assets/image/heart.svg";
import File from "../assets/image/file.svg";
import Toast from "react-native-toast-message";
import { useIsFocused } from "@react-navigation/native";

const NavigatorTab: FC = ({ navigation }) => {
  const Tab = createBottomTabNavigator();
  const isFocused = useIsFocused();
  const { height, width } = useWindowDimensions();
  const [click, setClick] = useState<boolean>(true);
  const [backPressed, setBackPressed] = useState<number>(0);
  useEffect(() => {
    if (isFocused) {
      const backAction = () => {
        if (backPressed + 2000 >= Date.now()) {
          BackHandler.exitApp();
        }
        setBackPressed(Date.now());
        Toast.show({ text1: "برای خروج دوبار برگردید", type: "info" });
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }
  }, [isFocused, backPressed]);

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
          focus: () => {
            setClick(true);
            Anim(HeightDecrease, courseNavHeight, 0);
            Anim(PaddingDecrease, navHeight, 0);
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
