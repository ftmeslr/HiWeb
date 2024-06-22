import { Stack, TextFieldProps, styled } from "@mui/material";

export const EmptyBoxContainerStyled = styled(Stack)<TextFieldProps>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  })
);
