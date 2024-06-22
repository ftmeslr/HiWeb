import { FC } from "react";

import { TextFieldProps, Typography } from "@mui/material";

import styles from "./mainInput.styles";
import { Stack } from "@mui/material";

const MainInput: FC<TextFieldProps & { outerLabel?: string }> = (props) => {
  const { StyledMainInput } = styles;

  const { required, label, outerLabel, ...otherProps } = props;

  return (
    <>
      <Stack>
        {outerLabel && <Typography mb={1}>{outerLabel}</Typography>}
        <StyledMainInput
          label={
            label ? (
              <>
                {label}
                {required ? (
                  <Typography component={"span"} className="requied-label">
                    {" "}
                    *
                  </Typography>
                ) : (
                  ""
                )}
              </>
            ) : null
          }
          {...otherProps}
        />
      </Stack>
    </>
  );
};

export default MainInput;
