import {useEffect, useState} from "react";
import {FormControlLabel, Checkbox} from "@material-ui/core";
import "./Filter.scss";
import {useSelector} from "react-redux";
import {storeCompanies} from "Stores/App";

type CompanyCheckboxType =
  | {
      label: string;
      slug: string;
      value: boolean;
    }[]
  | undefined;

const Filter = () => {
  const companies = useSelector(storeCompanies);
  const companiesDefaultState = companies?.map(({name, slug}) => ({
    label: name,
    slug,
    value: false,
  }));
  const [companiesState, setCompaniesState] = useState<CompanyCheckboxType>(
    undefined
  );

  useEffect(() => {
    setCompaniesState(companiesDefaultState);
    // eslint-disable-next-line
  }, [companies]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (companiesState) {
      let companiesEdited = [...companiesState];
      const foundIndex = companiesEdited.findIndex(
        ({slug}) => slug === event.target.name
      );
      companiesEdited[foundIndex].value = event.target.checked;

      setCompaniesState(companiesEdited);
    }
  };

  return (
    <div id="filter">
      <h5>Brands</h5>
      <div className="filter__checkboxContainer">
        <div className="filter__checkboxContainer-inner">
          {companiesState?.map(({label, slug, value}, index) => (
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
              label={label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
