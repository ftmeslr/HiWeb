import { Stack, styled } from "@mui/material";

const StyledContainer = styled(Stack)(() => ({
  ".MuiFormControl-root": {
    width: "100%",
  },
  ".forget-link-text": {
    textDecoration: "none",
  },
  ".link-container": {
    marginTop: "8px",
    marginBottom: "10px",
  },
  ".login-password": {
    textDecoration: "none",
    marginTop: "8px",
  },
  ".link-text": {
    textDecoration: "none",
  },
}));

export { StyledContainer };
