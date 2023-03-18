import Http from "../interceptor/interceptor";
import Toast from "react-native-toast-message";
import { LogInStudent } from "./LogInStudent";
interface Props {
  value: {
    email: string;
    password: string;
    birthDate: string;
    fullName: any;
    phoneNumber: any;
    nationalId: any;
    profile: any;
  };
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const RegisterStudent = async ({ value, setLoading }: Props) => {
  const LogInValue = { email: value.email, password: value.password };
  setLoading(true);
  try {
    const result = await Http.post("/auth/register", value);
    Toast.show({ type: "success", text1: `${result.data.message[0].message}` });
    LogInStudent({ value: LogInValue, setLoading });
    setLoading(false);
    return true;
  } catch (error: any) {
    setLoading(false);
    if (error.response.status === 400) {
      Toast.show({ type: "error", text1: "ایمیل معتبر نیست" });
    } else if (error.response.status > 400) {
      Toast.show({ type: "error", text1: "ایمیل یا کدملی وجود دارد" });
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
