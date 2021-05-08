import {Categorize, ProductCard} from "Components";
import "./Content.scss";

const Content = () => {
  return (
    <div id="content">
      <h4>Products</h4>
      <Categorize />
      <div className="content__products">
        <ProductCard />
      </div>
    </div>
  );
};

export default Content;
