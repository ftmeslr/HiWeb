import { hiwebApi } from "../api";
import { ILoginFormPostData, ILoginPostData } from "./login.types";

export const loginFormPost = async ({
  data,
}: {
  data: ILoginPostData;
}): Promise<ILoginFormPostData> => {
  const response = await hiwebApi.post<ILoginFormPostData>(
    "Security/UserLogin/Login",
    data
  );
  return response.data;
};
