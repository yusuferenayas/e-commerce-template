import {Categorize, ProductCard} from "Components";
import {useSelector} from "react-redux";
import {storeItems} from "Stores/App";
import ReactPaginate from "react-paginate";
import "./Content.scss";

const Content = () => {
  const items = useSelector(storeItems);

  return (
    <div id="content">
      <h4>Products</h4>
      <Categorize />
      <div className="content__products">
        {items &&
          items.map(({name, price}, index) => (
            <ProductCard key={index} name={name} price={price} />
          ))}
        <ReactPaginate
          pageCount={20}
          pageRangeDisplayed={0}
          marginPagesDisplayed={4}
          containerClassName="content__products-pagination"
          previousLabel="&larr; Prev"
          nextLabel="Next &rarr;"
        />
      </div>
    </div>
  );
};

export default Content;
