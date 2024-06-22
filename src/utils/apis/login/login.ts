import axios from "axios";
import { ILoginFormPostData, ILoginPostData } from "./login.types";
import { hiwebApi } from "../api";

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
