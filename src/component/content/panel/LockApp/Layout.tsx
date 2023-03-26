import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import CustomText from "../../../common/Text/CustomText";
import Lock from "../../../../assets/images/svg/gholf.svg";

type Props = {
  title: string;
  children: JSX.Element;
  Buttun?: JSX.Element;
};

const Layout: FC<Props> = ({ title, children, Buttun }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Lock style={styles.lockIcon} width={100} height={100} />
        <CustomText style={styles.message}>{title}</CustomText>
        <View style={styles.inputFieldsContainer}>{children}</View>
        {Buttun}
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  lockIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  message: {
    color: "#444444",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputFieldsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    textAlign: "center",
    marginRight: 10,
    fontSize: 24,
    fontWeight: "bold",
    borderRadius: 4,
  },
  unlockButton: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 10,
  },
  unlockButtonText: {
    color: "black",
  },
  kebord: {
    height: 50,
    backgroundColor: "#eaeaea",
    margin: 5,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 30,
    justifyContent: "center",
  },
});
