import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextStyle,
  NativeTouchEvent,
} from "react-native";
import React, { FC } from "react";
import CustomeText from "./CustomeText";

interface Props {
  type?: boolean;
  InputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
  errors?: string;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  showSoftInputOnFocus?: boolean;
  onPressIn?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const MyInput: FC<Props> = ({
  InputStyle,
  type,
  placeholder,
  value,
  onChangeText,
  errors,
  onFocus,
  showSoftInputOnFocus,
  onBlur,
  onPressIn,
}) => {
  return (
    <>
      <TextInput
        showSoftInputOnFocus={showSoftInputOnFocus}
        placeholder={placeholder}
        style={InputStyle}
        secureTextEntry={type}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        onPressIn={onPressIn}
      />
      {errors && (
        <CustomeText myStyle={{ color: "fff" }}>
          {"*" + errors + "*"}
        </CustomeText>
      )}
    </>
  );
};

export default MyInput;
