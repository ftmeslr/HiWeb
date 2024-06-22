import { FormikProps } from "formik";
import { FormEvent } from "react";
import { ILoginFormikProps } from "../hooks/useLoginForm/useLoginForm.types";

export interface ILoginFieldsProps {
  formik: FormikProps<ILoginFormikProps>;
  isLoading: boolean;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
