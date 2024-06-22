import axios from "axios";
import { ILoginFormPostData, ILoginPostData } from "./login.types";

export const loginFormPost = async ({
  data,
  type,
}: {
  data: ILoginPostData;
  type: string | number;
}): Promise<ILoginFormPostData> => {
  const response = await axios.post<ILoginFormPostData>(
    "/api/auth/login_pw",
    data,
    { params: { type } }
  );
  return response.data;
};
