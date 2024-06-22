import { FC } from "react";

import { CheckboxProps } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import CheckBoxActiveIcon from "../../icons/checkBoxActiveIcon";
import CheckBoxDisableIcon from "../../icons/checkBoxDisableIcon";

const MainCheckbox: FC<CheckboxProps> = (props) => {
  return (
    <Checkbox
      size="small"
      icon={<CheckBoxDisableIcon />}
      checkedIcon={<CheckBoxActiveIcon />}
      {...props}
    />
  );
};

export default MainCheckbox;
