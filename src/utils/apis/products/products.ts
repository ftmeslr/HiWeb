import { hiwebApi } from "../api";
import {
  ICreateNewProductProps,
  ICreateNewProductResponse,
  IGetProductsResponse,
} from "./products.types";

export const getProducts = async (
  pageNumber: any
): Promise<IGetProductsResponse> => {
  console.log(pageNumber);
  const response = await hiwebApi.get<IGetProductsResponse>(
    `General/Product/ProductList?count=${4}&skip=${pageNumber}`
  );
  return response.data;
};

export const createNewProduct = async ({
  data,
}: {
  data: ICreateNewProductProps;
}): Promise<ICreateNewProductResponse> => {
  const response = await hiwebApi.post<ICreateNewProductResponse>(
    "General/Product/AddProduct",
    data
  );
  return response.data;
};
