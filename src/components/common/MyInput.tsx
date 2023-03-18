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
  multiline?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
  errors?: string;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  showSoftInputOnFocus?: boolean;
  onPressIn?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  maxLength?: number;
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad";
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
  multiline,
  keyboardType,
  maxLength,
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
        multiline={multiline}
        maxLength={maxLength}
        keyboardType={keyboardType}
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
