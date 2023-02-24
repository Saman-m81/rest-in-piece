import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { FC } from "react";
import SearchIcon from "../../../assets/image/search.svg";
import MyInput from "../MyInput";
import { observer, inject } from "mobx-react";
import MyStore from "../../../store/Store";

type Props = {};

const Search: FC<Props> = ({}) => {
  return (
    <KeyboardAvoidingView style={styles.holder}>
      <MyInput
        placeholder="جستجو ..."
        InputStyle={styles.input}
        value={MyStore?.getSomeData()}
        onChangeText={(text) => MyStore?.setSomeData(text)}
      />
      <View style={styles.icon}>
        <SearchIcon />
      </View>
    </KeyboardAvoidingView>
  );
};

export default observer(Search);

const styles = StyleSheet.create({
  holder: { width: "65%", overflow: "hidden" },
  input: {
    backgroundColor: "white",
    width: "100%",
    height: 37,
    borderRadius: 50,
    textAlign: "right",
    paddingRight: 15,
    overflow: "hidden",
    position: "relative",
  },
  icon: {
    width: "20%",
    height: 37,
    position: "absolute",
    backgroundColor: "#D5E4FF",
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});
