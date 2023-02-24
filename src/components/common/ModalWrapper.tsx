import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { FC } from "react";
import Modal from "react-native-modal";

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
};

const ModalWrapper: FC<Props> = ({ visible, setVisible, children }) => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <Modal
        backdropColor="rgba(0,57,152,.55)"
        onBackButtonPress={() => setVisible(false)}
        deviceHeight={height + 50}
        statusBarTranslucent
        animationIn={"fadeInLeftBig"}
        animationOut={"fadeOutRightBig"}
        animationOutTiming={1000}
        animationInTiming={1000}
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: "8%",
          paddingVertical: "8.5%",
        }}
        isVisible={visible}
      >
        <View
          style={{
            borderRadius: 30,
            backgroundColor: "white",
            width: "100%",
            paddingHorizontal: "10%",
            paddingVertical: "5.5%",
          }}
        >
          {children}
        </View>
      </Modal>
    </>
  );
};

export default ModalWrapper;
