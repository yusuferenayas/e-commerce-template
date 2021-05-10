import "./FilterBrand.scss";
import React, {useEffect, useState} from "react";
import {FormControlLabel, Checkbox, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {storeCompanies} from "Stores/App";
import {
  resetSelectedBrand,
  setSelectedBrand,
  storeSelectedBrands,
} from "Stores/Product";

type CompanyCheckboxType =
  | {
      label: string;
      slug: string;
      value: boolean;
      itemCount: number;
    }[]
  | undefined;

const FilterBrand = () => {
  const dispatch = useDispatch();
  const selectedBrands = useSelector(storeSelectedBrands);
  const isAnySelectedBrands = selectedBrands.length > 0;
  const brands = useSelector(storeCompanies);
  const totalCount = brands?.reduce((a, b) => a + (b["itemCount"] || 0), 0);

  const brandsDefaultState = brands?.map(({name, slug, itemCount}) => ({
    label: name,
    slug,
    value: false,
    itemCount,
  }));

  const [search, setSearch] = useState<string>("");
  const [brandsState, setBrandsState] = useState<CompanyCheckboxType>(
    undefined
  );
  const [checkboxAll, setCheckboxAll] = useState<boolean>(true);

  useEffect(() => {
    setBrandsState(brandsDefaultState);
    // eslint-disable-next-line
  }, [brands]);

  useEffect(() => {
    setCheckboxAll(isAnySelectedBrands ? false : true);
    // eslint-disable-next-line
  }, [selectedBrands]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (brandsState) {
      let companiesEdited = [...brandsState];
      const foundIndex = companiesEdited.findIndex(
        ({slug}) => slug === event.target.name
      );
      companiesEdited[foundIndex].value = event.target.checked;

      setBrandsState(companiesEdited);
      dispatch(setSelectedBrand(event.target.name));
    }
  };

  const handleAllCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckboxAll(event.target.checked);
    setBrandsState(brandsDefaultState);
    dispatch(resetSelectedBrand());
  };

  return (
    <div id="filterBrand">
      <h5>Brands</h5>
      <div className="filterBrand__checkboxContainer">
        <div className="filterBrand__checkboxContainer-inner">
          <TextField
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            label="Search"
            variant="outlined"
            fullWidth
          />
          {!search && (
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={checkboxAll}
                  onChange={(event) =>
                    isAnySelectedBrands ? handleAllCheckboxChange(event) : null
                  }
                  name={"AllBrand"}
                />
              }
              label={`All (${totalCount})`}
            />
          )}
          {brandsState
            ?.filter(({label}) =>
              search
                ? label.toLowerCase().includes(search.toLowerCase())
                : label
            )
            .map(({label, slug, value, itemCount}, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    color="primary"
                    checked={value}
                    onChange={handleChange}
                    name={slug}
                  />
                }
                label={`${label} (${itemCount})`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBrand;
