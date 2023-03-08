import Http from "../interceptor/interceptor";

const GetAllComments = async (): Promise<object | null> => {
  const res = await Http.get("comments");
  return res.data;
};
export { GetAllComments };
