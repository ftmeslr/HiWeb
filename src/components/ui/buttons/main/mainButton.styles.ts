import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";

const MainButtonStyled = styled(LoadingButton)(() => ({
  borderRadius: "8px",
  boxShadow: "none",
  padding: "9px",
  fontSize: "16px",
  "&:hover": {
    boxShadow: "none",
  },
}));

export default MainButtonStyled;
