import "./FilterBrand.scss";
import {useEffect, useState} from "react";
import {FormControlLabel, Checkbox} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {storeCompanies} from "Stores/App";
import {resetBrand, setBrand, storeBrands} from "Stores/Product";

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
  const selectedBrands = useSelector(storeBrands);
  const isAnySelectedBrands = selectedBrands.length > 0;
  const brands = useSelector(storeCompanies);

  const brandsDefaultState = brands?.map(({name, slug, itemCount}) => ({
    label: name,
    slug,
    value: false,
    itemCount,
  }));

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
      dispatch(setBrand(event.target.name));
    }
  };

  const handleAllCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckboxAll(event.target.checked);
    setBrandsState(brandsDefaultState);
    dispatch(resetBrand());
  };

  return (
    <div id="filterBrand">
      <h5>Brands</h5>
      <div className="filterBrand__checkboxContainer">
        <div className="filterBrand__checkboxContainer-inner">
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
            label={"All"}
          />
          {brandsState?.map(({label, slug, value, itemCount}, index) => (
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
