import { Stack, TextFieldProps, styled } from "@mui/material";
import MainInput from "../main/mainInput";

export const StyledSearchInput = styled(MainInput)<TextFieldProps>(
  ({ theme }) => ({
    input: {
      fontWeight: 500,
    },
    overflow: "hidden",
    borderRadius: "11px",
    backgroundColor: theme.palette.background.paper,

    "& .start-icon": {
      color: `${theme.palette.primary[500]}`,

      svg: {
        width: "20px",
        height: "20px",
      },
    },

    "& .end-icon": {
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "-5px",
      svg: {
        width: "36px",
        height: "36px",
      },
    },
  })
);

export const ParentStack = styled(Stack)<TextFieldProps>(() => ({
  width: "100%",

  ".outside-svg": {
    height: "fit-content",
    svg: {
      width: "40px",
      height: "40px",
    },
  },
}));
