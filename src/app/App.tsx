import { QueryClient, QueryClientProvider } from "react-query";
import React, { FC, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Navigator } from "../navigation/Navigator";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import Toast from "react-native-toast-message";
import { toastConfig } from "./../components/common/ToastLayout/ToastLayout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootStore from "../store/Store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false },
    mutations: { retry: false },
  },
});

const App: FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const [Token, SetToken] = useState<boolean | null>(true);
  const RegisterStore = rootStore.registeration[0];
  const initialLog = async () => {
    // AsyncStorage.clear();
    const token = await AsyncStorage.getItem("token");
    if (token) {
      RegisterStore.SetActive();
      SetToken(true);
    } else {
      RegisterStore.SetDeActive();
      SetToken(false);
    }
  };
  useEffect(() => {
    initialLog();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (Token !== null) {
        setShow(false);
      }
    }, 1500);
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SplashScreen open={show} />
        {!show && (
          <View style={styles.container}>
            <Navigator />
          </View>
        )}
      </QueryClientProvider>
      <Toast config={toastConfig} visibilityTime={2000} />
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
});
