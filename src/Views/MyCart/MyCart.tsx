import "./MyCart.scss";
import {PriceText} from "Components/PriceText";
// @ts-ignore
import CounterInput from "react-counter-input";
import {Box} from "@material-ui/core";
import {colors} from "Theme/Variables";
import {CSSProperties, FC} from "react";
import {setCartItem, CartItemType, storeCartItems} from "Stores/Cart";
import {useDispatch, useSelector} from "react-redux";
import useTotalPrice from "Hooks/useTotalPrice";

const MyCart = () => {
  const totalPrice = useTotalPrice();
  const cartItems = useSelector(storeCartItems);

  return (
    <Box width="25%" paddingLeft={2}>
      <div id="myCart">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <CartItem key={index} {...item} />
            ))}
            <div className="myCart__totalPrice">
              <PriceText price={totalPrice} />
            </div>
          </>
        ) : (
          <p>Empty Cart</p>
        )}
      </div>
    </Box>
  );
};

type CartItemProps = CartItemType;

const CartItem: FC<CartItemProps> = (item) => {
  const dispatch = useDispatch();
  const {name, price, count} = item;

  const onCountChange = (changedCount: number) => {
    dispatch(setCartItem({...item, count: changedCount}));
  };

  return (
    <div id="cartItem">
      <div>
        <p>{name}</p>
        <PriceText price={price.toString()} />
      </div>
      <CounterInput
        min={0}
        max={100}
        count={count}
        onCountChange={onCountChange}
        btnStyle={btnStyle}
        inputStyle={inputStyle}
      />
    </div>
  );
};

const inputStyle: CSSProperties = {
  color: "white",
  backgroundColor: colors.primary,
  fontWeight: "bold",
  width: 22,
  height: 22,
};
const btnStyle: CSSProperties = {
  color: colors.primary,
  fontWeight: "bold",
};

export default MyCart;
