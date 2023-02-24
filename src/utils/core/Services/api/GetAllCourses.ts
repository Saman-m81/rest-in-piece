import Http from "../interceptor/interceptor";

const GetAllCourses = async (): Promise<object | null> => {
  const res = await Http.get(`course/getall`);
  return res.data.result;
};
export { GetAllCourses };
