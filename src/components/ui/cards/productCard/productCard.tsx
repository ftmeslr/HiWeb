import Image from "next/image";
import { Typography } from "@mui/material";
import { FC } from "react";
import { IProductCardProps } from "./productCard.types";
import productImg2 from "@images/mobileImg.png";
import { ProductCardStyled } from "./productCard.styles";
import { Box, Stack } from "@mui/material";

const ProductCard: FC<IProductCardProps> = (props) => {
  const { productImg, title, description, amount } = props;
  return (
    <>
      <ProductCardStyled>
        <Image
          src={productImg2}
          alt={"productImg"}
          style={{ width: "100%" }}
          // width={10}
          // height={10}
        />
        <Stack padding={3}>
          <Typography sx={{ fontSize: "16px" }}>{title}</Typography>
          <Typography sx={{ lineHeight: "28px", marginTop: "14px" }}>
            {description}
          </Typography>
          <Box sx={{ marginTop: "42px", display: "flex" }}>
            <Typography>قیمت: </Typography>
            <Typography>{amount} </Typography>
          </Box>
        </Stack>
      </ProductCardStyled>
    </>
  );
};

export default ProductCard;
