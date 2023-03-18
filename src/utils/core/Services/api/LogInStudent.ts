import AsyncStorage from "@react-native-async-storage/async-storage";
import Http from "../interceptor/interceptor";
import Toast from "react-native-toast-message";
import rootStore from "../../../../store/Store";

interface Props {
  value: {
    email: string;
    password: string;
  };
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const LogInStudent = async ({ value, setLoading }: Props) => {
  setLoading(true);
  try {
    const result = await Http.post("/auth/login", value);
    AsyncStorage.setItem(
      "user",
      JSON.stringify(result.data.result.studentModel)
    );
    AsyncStorage.setItem("token", result.data.result.jwtToken);
    rootStore.registeration[0].SetActive();
    Toast.show({
      type: "success",
      text1: `سلام ${result.data.result.studentModel.fullName} خوش آمدید👋`,
    });
    setLoading(false);
    return true;
  } catch (error: any) {
    setLoading(false);
    if (error.response.status === 400) {
      Toast.show({ type: "error", text1: "ایمیل معتبر نیست" });
    } else if (error.response.status > 400) {
      Toast.show({ type: "error", text1: "رمز عبور اشتباه است" });
    } else if (error.request.status === 0) {
      Toast.show({
        type: "error",
        text1: "مشکلی رخ داده اینترنت خود را چک کنید",
      });
    } else {
      Toast.show({ type: "error", text1: "مشکلی رخ داده است" });
    }
    return false;
  }
};
