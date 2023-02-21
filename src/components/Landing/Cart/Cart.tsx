import { StyleSheet, Image, View } from "react-native";
import React, { FC } from "react";
import CustomeText from "../../common/CustomeText";
import { HandleDescription } from "../../common/handleDec";
import Trash from "../../../assets/image/trash.svg";
import Coin from "../../../assets/image/coin.svg";
import Doctor from "../../../assets/image/doctor.svg";

interface Props {}

const Cart: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 110 }}>
        <View style={styles.card}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            <CustomeText myStyle={styles.title}>
              {HandleDescription("dlkjj fbvkjsd ", 18)}
            </CustomeText>
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <View style={{ alignSelf: "flex-end" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CustomeText
                  myStyle={{
                    fontSize: 12,
                    color: "#696969",
                    marginRight: 6,
                  }}
                >
                  یهخابرنس
                </CustomeText>
                <Doctor />
              </View>
              <View
                style={{
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CustomeText myStyle={{ fontSize: 11, color: "#696969" }}>
                  ت
                </CustomeText>
                <CustomeText
                  myStyle={{
                    fontSize: 12,
                    marginRight: 6,
                    color: "#E00000",
                  }}
                >
                  250000
                </CustomeText>
                <Coin />
              </View>
            </View>
            <View
              style={{
                alignSelf: "flex-start",
                width: 35,
                height: 35,
                backgroundColor: "#FF0000",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Trash fill="white" />
            </View>
          </View>
        </View>
        <View style={styles.img}>
          <Image
            source={require("../../../assets/image/logoo.png")}
            style={{ height: 70, width: 70 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  card: {
    width: "90%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 19,
    paddingRight: 38,
    paddingLeft: 15,
    paddingTop: 6,
    elevation: 8,
    justifyContent: "space-between",
    paddingBottom: 14,
  },
  title: { fontSize: 17, color: "#002D85" },
  img: {
    position: "absolute",
    height: "100%",
    right: 0,
    justifyContent: "center",
  },
});
