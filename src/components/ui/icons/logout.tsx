import { SvgIcon, SvgIconProps } from "@mui/material";

const LogoutIcon: React.FC<SvgIconProps> = (props) => {
  const { sx, ...otherProps } = props;
  return (
    <SvgIcon
      width="20"
      height="21"
      viewBox="0 0 20 21"
      sx={{ ...sx }}
      {...otherProps}
    >
      <svg>
        <path
          d="M9.375 10.5V4.25C9.375 4.08424 9.44085 3.92527 9.55806 3.80806C9.67527 3.69085 9.83424 3.625 10 3.625C10.1658 3.625 10.3247 3.69085 10.4419 3.80806C10.5592 3.92527 10.625 4.08424 10.625 4.25V10.5C10.625 10.6658 10.5592 10.8247 10.4419 10.9419C10.3247 11.0592 10.1658 11.125 10 11.125C9.83424 11.125 9.67527 11.0592 9.55806 10.9419C9.44085 10.8247 9.375 10.6658 9.375 10.5ZM14.0914 4.35156C13.9526 4.26383 13.7848 4.23425 13.6244 4.26922C13.4639 4.30419 13.3237 4.4009 13.234 4.53844C13.1443 4.67599 13.1123 4.84331 13.145 5.00424C13.1777 5.16516 13.2724 5.30677 13.4086 5.39844C15.2141 6.57578 16.25 8.43516 16.25 10.5C16.25 12.1576 15.5915 13.7473 14.4194 14.9194C13.2473 16.0915 11.6576 16.75 10 16.75C8.3424 16.75 6.75269 16.0915 5.58058 14.9194C4.40848 13.7473 3.75 12.1576 3.75 10.5C3.75 8.43516 4.78594 6.57578 6.59141 5.39844C6.72765 5.30677 6.82234 5.16516 6.85502 5.00424C6.88769 4.84331 6.85571 4.67599 6.766 4.53844C6.67629 4.4009 6.53606 4.30419 6.37561 4.26922C6.21517 4.23425 6.0474 4.26383 5.90859 4.35156C3.74219 5.76406 2.5 8.00469 2.5 10.5C2.5 12.4891 3.29018 14.3968 4.6967 15.8033C6.10322 17.2098 8.01088 18 10 18C11.9891 18 13.8968 17.2098 15.3033 15.8033C16.7098 14.3968 17.5 12.4891 17.5 10.5C17.5 8.00469 16.2578 5.76406 14.0914 4.35156Z"
          fill="#FF6666"
        />
      </svg>
    </SvgIcon>
  );
};

export default LogoutIcon;