import MainButton from "@/components/ui/buttons/main/mainButton";
import LogoutIcon from "@/components/ui/icons/logout";
import { Typography, Stack, useTheme } from "@mui/material";
import styles from "./heaer.styles";
import PlusIcon from "@/components/ui/icons/plus";
import { FC } from "react";
import { IHeaderProps } from "./header.types";
const Header: FC<IHeaderProps> = (props) => {
  const { HeaderContainerStyled, LeftSideHeaderStyled } = styles;
  const { handleClick } = props;
  const theme = useTheme();
  return (
    <HeaderContainerStyled>
      <Typography fontSize={"18px"} color={theme.palette.grey[500]}>
        لیست محصولات
      </Typography>
      <LeftSideHeaderStyled>
        <MainButton
          variant="contained"
          startIcon={<PlusIcon />}
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
        >
          <LogoutIcon />
          <Typography>خروج</Typography>
        </Stack>
      </LeftSideHeaderStyled>
    </HeaderContainerStyled>
  );
};

export default Header;
