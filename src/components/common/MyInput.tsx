import { StyleProp, TextInput, TextStyle } from "react-native";
import React, { FC } from "react";

interface Props {
  type?: boolean;
  InputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
}

const MyInput: FC<Props> = ({ InputStyle, type, placeholder }) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={InputStyle}
        secureTextEntry={type}
      />
    </>
  );
};

export default MyInput;
