import { useFormik, FormikConfig, FormikProps } from "formik";

import * as Yup from "yup";
import { ILoginFormikProps } from "./useLoginForm.types";

export const validationSchema = Yup.object().shape({
  username: Yup.string().required("لطفا نام کاربری را وارد کنید"),
  password: Yup.string().required("لطفا رمز عبور را وارد کنید"),
});

const initialValues = {
  username: "",
  password: "",
};

const useLoginForm = ({
  validationSchema: validationSchemaOverwrite,
  initialValues: initialValuesOverwrite,
  onSubmit: onSubmitOverwrite,
  ...props
}: Partial<
  FormikConfig<ILoginFormikProps>
>): FormikProps<ILoginFormikProps> => {
  return useFormik<ILoginFormikProps>({
    validationSchema: validationSchemaOverwrite ?? validationSchema,
    initialValues: initialValuesOverwrite ?? initialValues,
    onSubmit: onSubmitOverwrite ?? (() => {}),
    ...props,
  });
};

export default useLoginForm;
