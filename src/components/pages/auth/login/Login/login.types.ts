import { FormikProps } from "formik";
import { FormEvent } from "react";
import { ILoginFormikProps } from "../hooks/useLoginForm/useRegisterForm.types";

export interface ILoginDesktopProps {
  formik: FormikProps<ILoginFormikProps>;
  isLoading: boolean;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
