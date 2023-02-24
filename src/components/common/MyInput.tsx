import { StyleProp, TextInput, TextStyle } from "react-native";
import React, { FC } from "react";

interface Props {
  type?: boolean;
  InputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
}

const MyInput: FC<Props> = ({
  InputStyle,
  type,
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={InputStyle}
        secureTextEntry={type}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

export default MyInput;
