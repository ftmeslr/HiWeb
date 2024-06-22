import { FC } from "react";
import { IModalProps } from "./modal.types";
import { style } from "./modal.styles";
import { Box, Modal } from "@mui/material";

const MainModal: FC<IModalProps> = ({ children, open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default MainModal;
