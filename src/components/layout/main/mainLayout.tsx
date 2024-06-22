import { FC } from "react";
import { MainLayoutProps } from "./mainLayout.types";
import { Stack } from "@mui/material";

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Stack sx={{ padding: "0 100px", backgroundColor: "red" }}>
      {children}
    </Stack>
  );
};

export default MainLayout;
