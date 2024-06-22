import { ToastContainer } from "react-toastify";
import MuiWrapper from "./muiProvider/muiProvider";
import ReactQueryProvider from "./reactQueryProvider/reactQueryProvider";
import { FC, PropsWithChildren } from "react";
import "react-toastify/dist/ReactToastify.css";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <MuiWrapper>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
      </MuiWrapper>
    </ReactQueryProvider>
  );
};

export default Providers;
