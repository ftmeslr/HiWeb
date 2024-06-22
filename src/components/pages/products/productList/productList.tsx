import ProductCard from "@/components/ui/cards/productCard/productCard";
import { FC } from "react";
import { IProductListProps } from "./productList.styles";
import { Grid } from "@mui/material";

const ProductList: FC<IProductListProps> = ({ listProduct }) => {
  return (
    <>
      <Grid container gap={2} mt={4}>
        {listProduct.map((product, index) => {
          return (
            <Grid item lg={3} key={index}>
              <ProductCard
                title={product.title}
                productImg={product.imageUrl}
                description={product.description}
                amount={product.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductList;
