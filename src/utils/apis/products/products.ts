import { hiwebApi } from "../api";
import {
  ICreateNewProductProps,
  ICreateNewProductResponse,
  IGetProductsResponse,
} from "./products.types";

export const getProducts = async (): Promise<IGetProductsResponse> => {
  const response = await hiwebApi.get<IGetProductsResponse>(
    `General/Product/ProductList?count=${5}0&skip=${0}`
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
