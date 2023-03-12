import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";

type Props = {
  setVal: React.Dispatch<React.SetStateAction<string>>;
  val: string;
};

const Datepicker: FC<Props> = ({ val, setVal }) => {
  return (
    <>
      <DatePicker
        mode="calendar"
        isGregorian={false}
        options={{
          textFontSize: 14,
          defaultFont: "Yekan",
          headerFont: "Yekan",
        }}
        selected={val}
        maximumDate={getFormatedDate(new Date(), "jYYYY/jMM/jDD")}
        onSelectedChange={(value) => {
          setVal(value);
        }}
      />
    </>
  );
};

export default Datepicker;

const styles = StyleSheet.create({});
