import "./FilterTag.scss";
import {useEffect, useState} from "react";
import {FormControlLabel, Checkbox} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {setTags, storeTags} from "Stores/App";
import {
  resetSelectedTags,
  setSelectedTags,
  storeSelectedTags,
} from "Stores/Product";

type TagCheckboxType =
  | {
      name: string;
      value: boolean;
      itemCount: number;
    }[]
  | undefined;

const FilterTag = () => {
  const dispatch = useDispatch();
  const selectedTags = useSelector(storeSelectedTags);
  const isAnySelectedTags = selectedTags.length > 0;
  const tags = useSelector(storeTags);
  const totalCount = tags?.reduce((a, b) => a + (b["itemCount"] || 0), 0);

  const tagsDefaultState = tags?.map(({name, itemCount}) => ({
    name,
    value: false,
    itemCount,
  }));

  const [tagsState, setTagsState] = useState<TagCheckboxType>(undefined);
  const [checkboxAll, setCheckboxAll] = useState<boolean>(true);

  useEffect(() => {
    setTagsState(tagsDefaultState);
    // eslint-disable-next-line
  }, [tags]);

  useEffect(() => {
    setCheckboxAll(isAnySelectedTags ? false : true);
    // eslint-disable-next-line
  }, [selectedTags]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (tagsState) {
      let tagsEdited = [...tagsState];
      const foundIndex = tagsEdited.findIndex(
        ({name}) => name === event.target.name
      );
      tagsEdited[foundIndex].value = event.target.checked;

      setTagsState(tagsEdited);
      dispatch(setSelectedTags(event.target.name));
    }
  };

  const handleAllCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckboxAll(event.target.checked);
    setTagsState(tagsDefaultState);
    dispatch(resetSelectedTags());
  };

  return (
    <div id="filterTag">
      <h5>Tags</h5>
      <div className="filterTag__checkboxContainer">
        <div className="filterTag__checkboxContainer-inner">
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={checkboxAll}
                onChange={(event) =>
                  isAnySelectedTags ? handleAllCheckboxChange(event) : null
                }
                name={"AllTags"}
              />
            }
            label={`All (${totalCount})`}
          />
          {tagsState?.map(({name, value, itemCount}, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  color="primary"
                  checked={value}
                  onChange={handleChange}
                  name={name}
                />
              }
              label={`${name} (${itemCount})`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterTag;
