import Image from "next/image";
import { Typography } from "@mui/material";
import { FC } from "react";
import emptyImg from "@images/emptyList.svg";
import { IEmptyListProps } from "./emptyList.types";
import { EmptyBoxContainerStyled } from "./emptyList.styles";

const EmptyList: FC<IEmptyListProps> = (props) => {
  const { title } = props;
  return (
    <EmptyBoxContainerStyled>
      <Image src={emptyImg} alt="emptyList" />
      <Typography>{title}</Typography>
    </EmptyBoxContainerStyled>
  );
};

export default EmptyList;
