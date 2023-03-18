import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { FC } from "react";
import CustomeText from "../common/CustomeText";
import User from "../../assets/image/user.svg";
import Exit from "../../assets/image/exit.svg";
import Off from "../../assets/image/off.svg";
import Heart from "../../assets/image/heart.svg";
import Cart from "../../assets/image/cart.svg";
import Cog from "../../assets/image/cog.svg";
import File from "../../assets/image/file.svg";
import Btn from "../common/Btn";
import ImageLoader from "./../common/imageloader/ImageLoader";
const drawerBar = [
  {
    title: "پروفایل کاربری",
    icon: <User fill="gray" height={20} width={20} />,
    href: "Profile",
  },
  {
    title: "دوره‌ها",
    icon: <File fill="gray" height={20} width={20} />,
    href: "Course",
  },
  {
    title: "علاقمندی‌ها",
    icon: <Heart fill="gray" height={20} width={20} />,
    href: "Fave",
  },
  {
    title: "سبد خرید",
    icon: <Cart fill="gray" height={20} width={20} />,
    href: "Cart",
  },
  {
    title: "تنظیمات",
    icon: <Cog fill="gray" height={20} width={20} />,
    href: "Profile",
  },
];

const MyDrawer: FC = ({ navigation }) => {
  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingBottom: 60,
        paddingTop: 50,
        height: "100%",
      }}
    >
      <View style={{ position: "absolute", left: 18 }}>
        <Btn Vstyle={{}} Press={() => navigation.closeDrawer()}>
          <Exit height={20} width={20} />
        </Btn>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageLoader
            style={{ height: 100, width: 100, borderRadius: 50 }}
            src="../../assets/image/user.png"
          />
          <CustomeText myStyle={{ color: "#002D85", fontSize: 25 }}>
            Saman
          </CustomeText>
        </View>
        <View>
          {drawerBar.map((item, index) => (
            <Btn
              Vstyle={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-end",
              }}
              Tstyle={{
                color: "#686868",
                fontSize: 17,
                marginRight: 15,
              }}
              Press={() => navigation.navigate(item.href)}
              title={item.title}
              key={index}
            >
              {item.icon}
            </Btn>
          ))}
        </View>
        <Btn
          Press={() => AsyncStorage.clear()}
          Vstyle={{
            backgroundColor: "#FFF4F4",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            flexDirection: "row",
            height: 40,
            alignSelf: "center",
          }}
          title="خروج از حساب"
          Tstyle={{ fontSize: 15, color: "#FF2B2B" }}
        >
          <Off width={15} height={15} />
        </Btn>
      </View>
    </View>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({});
