export interface IGetProductsResponse {
  data: {
    totalRowCount: number;

    list: {
      description: string;
      id: string;
      imageUrl: string;
      price: number;
      rate: number;
      title: string;
      view: number;
    }[];
  };
}
export interface ICreateNewProductProps {}

export interface ICreateNewProductResponse {}
