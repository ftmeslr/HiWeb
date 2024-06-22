import { SvgIcon, SvgIconProps } from "@mui/material";

const CheckBoxDisableIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 25" {...props}>
      <svg fill="none">
        <rect
          x="0.75"
          y="1.25"
          width="22.5"
          height="22.5"
          rx="5.25"
          stroke={props.color ? "currentColor" : "#D0D5DD"}
          strokeWidth="1.5"
        />
      </svg>
    </SvgIcon>
  );
};

export default CheckBoxDisableIcon;
