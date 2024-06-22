import MainButton from "@/components/ui/buttons/main/mainButton";
import LogoutIcon from "@/components/ui/icons/logout";
import PlusIcon from "@/components/ui/icons/plus";
import { Stack, Typography, useTheme } from "@mui/material";
import cookie from "cookie";
import styles from "./heaer.styles";

import { useRouter } from "next/router";
import { FC } from "react";
import { IHeaderProps } from "./header.types";
const Header: FC<IHeaderProps> = (props) => {
  const { HeaderContainerStyled, LeftSideHeaderStyled } = styles;
  const { handleClick } = props;
  const theme = useTheme();
  const router = useRouter();
  const clearCookiesOptions = {
    secure: true,
    maxAge: 0,
    path: "/",
  };
  return (
    <HeaderContainerStyled>
      <Typography fontSize={"18px"} color={theme.palette.grey[500]}>
        لیست محصولات
      </Typography>
      <LeftSideHeaderStyled>
        <MainButton
          variant="contained"
          startIcon={<PlusIcon fontSize="small" />}
          sx={{
            color: "#fff",
            fontSize: "16px",
            paddingX: "60px",
            fontWeight: "400",
          }}

          onClick={() => {
            handleClick();
          }}
        >
          افزودن محصول
        </MainButton>
        <Typography>info@gmail.com</Typography>
        <Stack
          display={"flex"}
          alignItems={"center"}
          flexDirection={"row"}
          gap={"4px"}
          color={theme.palette.error.main}
          sx={{ cursor: "pointer" }}
          onClick={() => {
            document.cookie = cookie.serialize(
              "token",
              "",
              clearCookiesOptions
            );
            router.push("/auth/login");
          }}
        >
          <LogoutIcon fontSize={"medium"} />
          <Typography fontSize={"16px"}>خروج</Typography>
        </Stack>
      </LeftSideHeaderStyled>
    </HeaderContainerStyled>
  );
};

export default Header;
