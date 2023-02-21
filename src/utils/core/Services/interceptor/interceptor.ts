import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_PUBLIC_PATH } from "@env";

const MAIN_URL = REACT_APP_PUBLIC_PATH;
const instance = axios.create({
  baseURL: MAIN_URL,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // check if error is expected from backend
    try {
      const expectedError =
        error.response &&
        error.response.state >= 400 &&
        error.response.status < 500;

      // if error doesnt expected when we log it
      if (!expectedError) {
        // tweak it later
        // get error message from backend (see object of response later... maybe its changed)
        try {
          console.log(error.response.data.message.message[0].message);
        } catch (error) {}
      }
    } catch (error) {}
    return Promise.reject(error);
  }
);

// will send token to headers request ( in x-auth-token body )
// instance.interceptors.request.use(async (config) => {
//   config.headers["x-auth-token"] = await AsyncStorage.getItem("token");
//   return config;
// });
export default instance;
