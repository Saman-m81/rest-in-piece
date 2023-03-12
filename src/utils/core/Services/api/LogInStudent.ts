import AsyncStorage from "@react-native-async-storage/async-storage";
import Http from "../interceptor/interceptor";

export const LogInStudent = async (value: {
  email: string;
  password: string;
}) => {
  try {
    const result = await Http.post("/auth/login", value);
    console.log(result.data.result);
    AsyncStorage.setItem(
      "user",
      JSON.stringify(result.data.result.studentModel)
    );
    AsyncStorage.setItem("token", result.data.result.jwtToken);
  } catch (error) {}
};
