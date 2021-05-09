import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import {sortOptions} from "Config";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSort, storeSort} from "Stores/Product";
import "./Sorting.scss";

const Sorting = () => {
  const dispatch = useDispatch();
  const sortValue = useSelector(storeSort);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSort((event.target as HTMLInputElement).value));
  };

  return (
    <div id="sorting">
      <h5>Sorting</h5>
      <div className="sorting__radioContainer">
        <RadioGroup
          aria-label="sort"
          name="sortRadio"
          value={sortValue}
          onChange={handleChange}
        >
          {sortOptions.map(({value, label}, index) => (
            <FormControlLabel
              key={index}
              value={value}
              control={<Radio color="primary" />}
              label={label}
            />
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default Sorting;
