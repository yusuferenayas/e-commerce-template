import {Categorize, ProductCard} from "Components";
import {useDispatch, useSelector} from "react-redux";
import {storeItems, storeMaxPageCount} from "Stores/App";
import ReactPaginate from "react-paginate";
import "./Content.scss";
import {setCurrentPage, storeCurrentPage} from "Stores/Product";
import {Grid} from "@material-ui/core";

const Content = () => {
  const dispatch = useDispatch();
  const items = useSelector(storeItems);
  const currentPage = useSelector(storeCurrentPage);
  const pageCount = useSelector(storeMaxPageCount);

  return (
    <div id="content">
      <h4>Products</h4>
      <Categorize />
      <div className="content__products">
        <Grid container spacing={2}>
          {items &&
            items.map(({name, price}, index) => (
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <ProductCard key={index} name={name} price={price} />
              </Grid>
            ))}
        </Grid>
      </div>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        containerClassName="content__products-pagination"
        previousLabel="&larr; Prev"
        nextLabel="Next &rarr;"
        onPageChange={({selected}) => dispatch(setCurrentPage(selected + 1))}
        forcePage={currentPage - 1}
      />
    </div>
  );
};

export default Content;
