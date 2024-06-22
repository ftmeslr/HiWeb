import { FormikProps } from "formik";
import { toast } from "react-toastify";

interface formikErrorHandlerConfig {
  oneByOne: boolean;
  hasToast: boolean;
}

const handleArrayErrors = (error: Array<object>): boolean => {
  let hasError = false;

  error.every((errorObj) => {
    let breakOut = false;
    for (const key in errorObj) {
      if (Object.prototype.hasOwnProperty.call(errorObj, key)) {
        const error = errorObj[key as keyof object];
        toast.error(error);
        breakOut = true;
        hasError = true;
        break;
      }
    }

    return !breakOut; // return false to break out of every loop
  });

  return hasError;
};

export const formikErrorHandler = <T>(
  formik: FormikProps<T>,
  config: formikErrorHandlerConfig = { hasToast: true, oneByOne: true }
): boolean => {
  let hasError = false;
  for (const key in formik.errors) {
    if (Object.prototype.hasOwnProperty.call(formik.errors, key)) {
      const error = formik.errors[key as keyof object];
      if (error) {
        if (Array.isArray(error)) {
          hasError = handleArrayErrors(error as Array<object>);
        } else {
          config.hasToast && toast.error(error);
          const arrayOfKeys = Object.keys(formik.errors)?.map((item) => item);
          const touchedObject = arrayOfKeys.reduce(
            (o, key) => ({ ...o, [key]: true }),
            {}
          );
          formik.setTouched(touchedObject);
          hasError = true;
          if (config.oneByOne) {
            break;
          }
        }
      }
    }
  }

  return hasError;
};
