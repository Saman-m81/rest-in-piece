import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import React, { FC, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Navigator } from "../components/navigation/Navigator";
import SplashScreen from "../components/SplashScreen/SplashScreen";
const App: FC = () => {
  const [show, setShow] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1500);
  }, []);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false, refetchOnWindowFocus: false },
      mutations: { retry: false },
    },
  });
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
