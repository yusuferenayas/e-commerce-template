import {FC} from "react";
import "./ProductCard.scss";
import ProductImg from "Assets/Product.jpeg";
import {PriceText} from "Components";
import {Button} from "Components/Button";

type ProductCardProps = {
  name: string;
  price: number;
};

const ProductCard: FC<ProductCardProps> = ({name, price}) => {
  return (
    <div id="productCard">
      <img src={ProductImg} alt="Sony Playstation 5" />
      <PriceText price={price.toString()} />
      <p>
        <b>{name}</b>
      </p>
      <Button label="Add" onClick={() => console.log("burdayım")} />
    </div>
  );
};

export default ProductCard;
