import { StyleSheet, View } from "react-native";
import React, { FC } from "react";
import ImageLoader from "./../../common/imageloader/ImageLoader";
import CustomeText from "../../common/CustomeText";
import { HandleDescription } from "../../common/handleDec";

type Props = { postId: string; username: string; comment: string };

const Comments: FC<Props> = ({ username, postId, comment }) => {
  return (
    <View
      style={{
        marginTop: 20,
        marginBottom: 15,
        width: "100%",
        elevation: 10,
        height: 100,
        backgroundColor: "white",
        borderRadius: 20,
        minHeight: 115,
      }}
    >
      <View
        style={{
          alignItems: "center",
          paddingRight: 7,
          paddingBottom: 7,
          paddingTop: 10,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <CustomeText
          myStyle={{ color: "#002d85", marginRight: 10, fontSize: 17 }}
        >
          {username}
        </CustomeText>

        <ImageLoader
          style={{
            width: 45,
            height: 45,
            resizeMode: "cover",
            borderRadius: 45,
          }}
          srcR={require("../../../assets/image/google.png")}
        />
      </View>
      <View style={{ paddingHorizontal: 12 }}>
        <CustomeText myStyle={{ color: "#999999", fontSize: 12 }}>
          {comment}
        </CustomeText>
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({});
