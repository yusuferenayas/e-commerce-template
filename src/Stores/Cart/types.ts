import {ItemModel} from "Models";

export type CartItemType = ItemModel & {
  count: number;
};

export interface CartState {
  cartItems: CartItemType[];
}
