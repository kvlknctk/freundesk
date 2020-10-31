interface IItemState {
  name: string;
  image: string;
  price: string;
}

export interface IProductState {
  products: object;
}

export interface IBasketState {
  addedProducts: any;
  total: number
}
