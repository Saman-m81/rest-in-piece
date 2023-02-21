import { Text, StyleProp, TextStyle } from "react-native";
import React, { FC } from "react";
import { GestureResponderEvent } from "react-native/Libraries/Types/CoreEventTypes";

interface Props {
  children?: string;
  myStyle?: StyleProp<TextStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const CustomeText: FC<Props> = ({ children, myStyle, onPress }) => {
  return (
    <>
      <Text onPress={onPress} style={[myStyle, { fontFamily: "Yekan" }]}>
        {children}
      </Text>
    </>
  );
};

export default CustomeText;
