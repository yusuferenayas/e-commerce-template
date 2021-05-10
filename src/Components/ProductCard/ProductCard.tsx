import {FC} from "react";
import "./ProductCard.scss";
import ProductImg from "Assets/Product.jpeg";
import {PriceText} from "Components";
import {Button} from "Components/Button";
import {useDispatch} from "react-redux";
import {addCartItem} from "Stores/Cart";
import {ItemModel} from "Models";

type ProductCardProps = ItemModel;

const ProductCard: FC<ProductCardProps> = (item) => {
  const {name, price} = item;
  const dispatch = useDispatch();

  return (
    <div id="productCard">
      <img src={ProductImg} alt="Sony Playstation 5" />
      <PriceText price={price.toString()} />
      <p>
        <b>{name}</b>
      </p>
      <Button label="Add" onClick={() => dispatch(addCartItem(item))} />
    </div>
  );
};

export default ProductCard;
