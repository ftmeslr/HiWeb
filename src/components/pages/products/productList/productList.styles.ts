export interface IProductListProps {
  listProduct: {
    description: string;
    id: string;
    imageUrl: string;
    price: number;
    rate: number;
    title: string;
    view: number;
  }[];
}
