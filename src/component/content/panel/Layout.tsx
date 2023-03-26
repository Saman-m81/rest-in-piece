import { StyleSheet, View } from "react-native";
import React, { FC } from "react";

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 25,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          elevation: 8,
          height: "100%",
          borderRadius: 30,
          paddingVertical: 40,
          paddingHorizontal: 30,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({});
