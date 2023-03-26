import { FC } from "react";
import { View } from "react-native";
import Text from "../../common/Text/CustomText";
type Props = {
  title: string;
  desc: string | null;
};

const text: string =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ... چاپ و";

const Top: FC<Props> = ({ title, desc = text }) => {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-end",
        flex: 1,
        marginTop: "30%",
      }}
    >
      <Text style={{ fontSize: 30, color: "#575757" }} title={title} />
      <Text
        style={{ fontSize: 14, color: "#575757", marginTop: 13 }}
        title={desc ?? text}
      />
    </View>
  );
};

export default Top;
