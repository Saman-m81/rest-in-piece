import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  TextStyle,
} from "react-native";
import React, { FC } from "react";
import CustomeText from "./CustomeText";

type Props = {
  children: string;
  style: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  myStyle?: StyleProp<TextStyle>;
};

const Btn: FC<Props> = ({ children, style, onPress, myStyle }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <CustomeText myStyle={myStyle}>{children}</CustomeText>
    </TouchableOpacity>
  );
};

export default Btn;
