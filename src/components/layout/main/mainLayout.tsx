import { FC } from "react";
import { MainLayoutProps } from "./mainLayout.types";

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ padding: "0 100px", backgroundColor: "red" }}>{children}</div>
  );
};

export default MainLayout;
