import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";

const CheckBoxActiveIcon: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme();
  return (
    <SvgIcon viewBox="0 0 24 25" {...props}>
      <svg fill="none">
        <rect
          y="0.5"
          width="24"
          height="24"
          rx="6"
          fill={props.color ? "currentColor" : theme.palette.primary.main}
        />
        <path
          d="M19.0421 6.93918C19.3233 7.22047 19.4812 7.60193 19.4812 7.99968C19.4812 8.39743 19.3233 8.77889 19.0421 9.06018L11.5421 16.5602C11.2608 16.8414 10.8793 16.9994 10.4816 16.9994C10.0838 16.9994 9.70236 16.8414 9.42107 16.5602L6.42107 13.5602C6.14783 13.2773 5.99664 12.8984 6.00006 12.5051C6.00347 12.1118 6.16123 11.7356 6.43934 11.4575C6.71745 11.1793 7.09367 11.0216 7.48697 11.0182C7.88026 11.0148 8.25916 11.1659 8.54207 11.4392L10.4816 13.3787L16.9211 6.93918C17.2024 6.65797 17.5838 6.5 17.9816 6.5C18.3793 6.5 18.7608 6.65797 19.0421 6.93918Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  );
};

export default CheckBoxActiveIcon;
