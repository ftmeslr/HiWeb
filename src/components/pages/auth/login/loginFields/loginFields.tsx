import MainButton from "@/components/ui/buttons/main/mainButton";
import MainInput from "@/components/ui/inputs/main/mainInput";
import React from "react";
import { StyledContainer } from "./loginFields.styles";
import { ILoginFieldsProps } from "./loginFields.types";
import { Typography, Stack, useTheme } from "@mui/material";
import MainCheckbox from "@/components/ui/inputs/checkbox/mainCheckbox";

const LoginFields: React.FC<ILoginFieldsProps> = ({
  onSubmit: handleSubmit,
  formik,
  isLoading = false,
}) => {
  const Theme = useTheme();
  return (
    <form onSubmit={handleSubmit}>
      <StyledContainer spacing="28px">
        <MainInput
          outerLabel="نام کاربری"
          placeholder="نام کاربری..."
          {...formik.getFieldProps("username")}
          error={Boolean(formik.errors.username && formik.touched.username)}
        />
        <MainInput
          outerLabel="کلمه عبور"
          placeholder="کلمه عبور..."
          type="password"
          {...formik.getFieldProps("password")}
          error={Boolean(formik.errors.password && formik.touched.password)}
        />
        <Stack flexDirection={"row"} alignItems={"center"}>
          <MainCheckbox onChange={(e) => {}} />
          <Typography color={Theme.palette.info.main}>
            مرا به خاطر بسپار
          </Typography>
        </Stack>

        <MainButton
          variant="contained"
          type="submit"
          loading={isLoading}
          sx={{ color: "#fff" }}
        >
          ورود
        </MainButton>
      </StyledContainer>
    </form>
  );
};

export default LoginFields;
