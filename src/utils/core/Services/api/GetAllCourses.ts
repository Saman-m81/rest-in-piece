import Http from "../interceptor/interceptor";

const GetAllCourses = async (
  pageNumber: number,
  pageSize: number
): Promise<object | null> => {
  const res = await Http.get(
    `course/list?pagenumber=${pageNumber}&pagesize=${pageSize}`
  );
  return res.data.result;
};
export { GetAllCourses };
