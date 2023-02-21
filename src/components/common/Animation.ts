import { Animated, Easing } from "react-native";

const Anim = (
  flexGrow: Animated.Value,
  val: number,
  duration: number,
  delay: number = 0
) => {
  Animated.timing(flexGrow, {
    toValue: val, //4
    duration: duration,
    easing: Easing.linear,
    useNativeDriver: false,
    delay: delay,
  }).start();
};

const AnimLoop = (
  flexGrow: Animated.Value,
  val: number,
  duration: number,
  delay: number = 0,
  Stop: boolean = false
) => {
  Stop
    ? Animated.loop(
        Animated.timing(flexGrow, {
          toValue: val,
          duration: duration,
          easing: Easing.linear,
          useNativeDriver: false,
          delay: delay,
        })
      ).stop()
    : Animated.loop(
        Animated.timing(flexGrow, {
          toValue: val,
          duration: duration,
          easing: Easing.linear,
          useNativeDriver: false,
          delay: delay,
        })
      ).start();
};

export { Anim, AnimLoop };
