import "./MyCart.scss";
import {PriceText} from "Components/PriceText";
// @ts-ignore
import CounterInput from "react-counter-input";
import {Box} from "@material-ui/core";
import {colors} from "Theme/Variables";
import {CSSProperties} from "react";

const MyCart = () => {
  return (
    <Box width="25%" paddingLeft={2}>
      <div id="myCart">
        <CartItem />
        <div className="myCart__priceContainer">
          <PriceText price="39,97" />
        </div>
      </div>
    </Box>
  );
};

const CartItem = () => {
  return (
    <div id="cartItem">
      <div>
        <p>Example Product</p>
        <PriceText price="14,99" />
      </div>
      <CounterInput
        min={0}
        max={10}
        count={1}
        onCountChange={(count: number) => console.log(count)}
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
