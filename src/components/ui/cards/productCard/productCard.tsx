import Image from "next/image";
import { Typography } from "@mui/material";
import { FC } from "react";
import { IProductCardProps } from "./productCard.types";

const ProductCard: FC<IProductCardProps> = (props) => {
  const { productImg, title, description, amount } = props;

  return (
    <>
      <div>
        {/* <Image src={productImg} alt={"productImg"} /> */}
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
        <div>
          <Typography>قیمت: </Typography>
          <Typography>{amount} </Typography>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
