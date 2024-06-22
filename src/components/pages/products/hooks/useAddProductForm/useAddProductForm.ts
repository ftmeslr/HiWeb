import { useFormik, FormikConfig, FormikProps } from "formik";

import * as Yup from "yup";
import { ILoginFormikProps } from "./useAddProductForm.types";

export const validationSchema = Yup.object().shape({
  ProductTitle: Yup.string().required("لطفا نام محصول را وارد کنید"),
  ProductPrice: Yup.string().required("لطفا قیمت محصول  را وارد کنید"),
  Description: Yup.string().required("لطفا توضیحات را وارد کنید"),
});

const initialValues = {
  ProductTitle: "",
  ProductPrice: "",
  Description: "",
};

const useAddProductForm = ({
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

export default useAddProductForm;
