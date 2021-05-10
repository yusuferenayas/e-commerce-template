import React, {FC} from "react";
import "./PriceText.scss";

type PriceTextProps = {
  price: string;
  color?: string;
};

const PriceText: FC<PriceTextProps> = ({price, color}) => {
  return (
    <div id="priceText" {...(color && {style: {color}})}>
      &#8378; {price}
    </div>
  );
};

export default PriceText;
