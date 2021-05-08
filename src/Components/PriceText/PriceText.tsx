import React, {FC} from "react";
import "./PriceText.scss";

type PriceTextProps = {
  price: string;
};

const PriceText: FC<PriceTextProps> = ({price}) => {
  return <div id="priceText">&#8378; {price}</div>;
};

export default PriceText;
