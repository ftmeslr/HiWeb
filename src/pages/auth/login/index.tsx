import useLoginForm from "@/components/pages/auth/login/hooks/useLoginForm/useLoginForm";
import { ILoginPostData } from "@/utils/apis/login/login.types";
import { loginFormPost } from "@/utils/apis/login/login";

import { formikErrorHandler } from "@/utils/formikErrorHandler";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FC, FormEvent } from "react";
import { toast } from "react-toastify";
import Login from "@/components/pages/auth/login/Login/login";

const LoginPage: FC = () => {
  const router = useRouter();

  const { mutate: loginMutation, isLoading: loginIsLoading } = useMutation(
    loginFormPost,
    {
      onSuccess() {
        router.push("/");
        toast.success("با موفقیت وارد شدید");
      },
      onError() {
        toast.error("خطایی رخ داده است");
      },
    }
  );

  const handleLogin = (values: ILoginPostData): void => {
    loginMutation({
      data: values,
    });
  };

  const loginFormik = useLoginForm({
    onSubmit: handleLogin,
  });

  const registerFormHandleSubmit = (
    event: FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    if (formikErrorHandler(loginFormik)) return;
    loginFormik.handleSubmit();
  };

  return (
    <Login
      formik={loginFormik}
      isLoading={loginIsLoading}
      onSubmit={registerFormHandleSubmit}
    />
  );
};

export default LoginPage;
