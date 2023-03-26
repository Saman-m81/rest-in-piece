import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import React, { FC } from "react";
import CustomText from "../Text/CustomText";

type Props = {
  Vstyle?: StyleProp<ViewStyle> | null;
  Tstyle?: StyleProp<TextStyle> | null;
  Press?: ((event: GestureResponderEvent) => void) | undefined;
  title?: string;
  children?: JSX.Element;
};

const Btn: FC<Props> = ({ Vstyle, Tstyle, Press, title, children }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={Press}>
      <View style={Vstyle ? Vstyle : styles.button}>
        <CustomText style={Tstyle ? Tstyle : styles.text} title={title} />
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: "42%",
    height: 49,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  text: {
    fontSize: 18,
  },
});
