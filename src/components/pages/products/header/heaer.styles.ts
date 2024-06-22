// mui
import { Stack } from "@mui/material";
import { styled } from "@mui/system";

const HeaderContainerStyled = styled(Stack)(() => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #A0A0A0",
    paddingTop: "36px",
    paddingBottom: "21px",
  };
});

const LeftSideHeaderStyled = styled(Stack)(() => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "24px",
  };
});

const headerStyles = {
  HeaderContainerStyled,
  LeftSideHeaderStyled,
};

export default headerStyles;
