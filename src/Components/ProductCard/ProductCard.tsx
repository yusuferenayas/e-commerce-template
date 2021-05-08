import {FC} from "react";
import "./ProductCard.scss";
import ProductImg from "Assets/Product.jpeg";
import {PriceText} from "Components";
import {Button} from "Components/Button";

type ProductCardProps = {};

const ProductCard: FC<ProductCardProps> = ({}) => {
  return (
    <div id="productCard">
      <img src={ProductImg} alt="Sony Playstation 5" />
      <PriceText price="14,99" />
      <p>
        <b>Gorgeous Office Mug</b>
      </p>
      <Button label="Add" onClick={() => console.log("burdayım")} />
    </div>
  );
};

export default ProductCard;
