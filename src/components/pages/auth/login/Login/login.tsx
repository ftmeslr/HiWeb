import React from "react";

import LoginFields from "../loginFields/loginFields";
import { Grid, Box } from "@mui/material";

import loginMainImg from "@images/login_img.svg";
import mainLogo from "@images/main_logo.svg";
import Image from "next/image";
import { ILoginDesktopProps } from "./login.types";
const Login: React.FC<ILoginDesktopProps> = ({
  formik,
  isLoading,
  onSubmit,
}) => {
  return (
    <Grid container component="main">
      <Grid item md={6}>
        <Image
          src={loginMainImg}
          alt="loginMainImg"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid
        item
        md={6}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          alt="mainLogo"
          src={mainLogo}
          style={{ width: "136px", marginBottom: "100px" }}
        />
        <Box
          sx={{
            border: "1px solid #9A9A9A",
            borderRadius: "16px",
            padding: "58px 48px",
            width: "483px",
            height: "437px",
          }}
        >
          <LoginFields
            formik={formik}
            isLoading={isLoading}
            onSubmit={onSubmit}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
