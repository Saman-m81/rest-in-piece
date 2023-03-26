import {
  Animated,
  InputModeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextStyle,
  TextInputFocusEventData,
  NativeTouchEvent,
} from "react-native";
import React, { FC } from "react";
import CustomText from "../Text/CustomText";

type Props = {
  placeholder: string;
  style: StyleProp<TextStyle> | StyleProp<TextStyle> | null;
  passBool?: boolean;
  type?: InputModeOptions;
  onChangeText?: ((text: string) => void) | undefined;
  value?: string;
  errors?: string;
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  KeboradShow?: boolean;
  onPressIn?: ((e: NativeSyntheticEvent<NativeTouchEvent>) => void) | undefined;
  Estyle?: StyleProp<TextStyle>;
  editable?: boolean;
};

const Field: FC<Props> = ({
  placeholder,
  style,
  passBool,
  type,
  value,
  onChangeText,
  errors,
  onFocus,
  onBlur,
  KeboradShow,
  onPressIn,
  Estyle,
  editable,
}) => {
  return (
    <>
      {errors && (
        <CustomText style={Estyle ? Estyle : { color: "#fff" }}>
          {"* " + errors + " *"}
        </CustomText>
      )}
      <TextInput
        placeholder={placeholder}
        style={style ? [styles.field, style] : styles.field}
        secureTextEntry={passBool}
        editable={editable}
        inputMode={type}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        showSoftInputOnFocus={KeboradShow}
        onPressIn={onPressIn}
      />
    </>
  );
};

export default Field;

const styles = StyleSheet.create({
  field: {
    backgroundColor: "white",
    width: "100%",
    height: 53,
    borderRadius: 50,
    paddingHorizontal: 60,
    fontSize: 17,
    writingDirection: "rtl",
    direction: "rtl",
    alignSelf: "flex-end",
    marginVertical: 12.5,
    textAlign: "right",
    fontFamily: "Yekanbakh",
  },
});
