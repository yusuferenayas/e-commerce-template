import {Box} from "@material-ui/core";
import {Sorting} from "Components";
import {FilterBrand, FilterTag} from "Components";

const Sidebar = () => {
  return (
    <Box width="25%" paddingRight={2}>
      <Sorting />
      <FilterBrand />
      <FilterTag />
    </Box>
  );
};

export default Sidebar;
