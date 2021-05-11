import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {storeCartItems} from "Stores/Cart";

export const useTotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const cartItems = useSelector(storeCartItems);

  useEffect(() => {
    let rawPrice = 0;
    cartItems.map(({price, count}) => (rawPrice = rawPrice + count * price));

    setTotalPrice(rawPrice);
  }, [cartItems]);

  return Number(totalPrice).toFixed(2).toString();
};

export default useTotalPrice;
