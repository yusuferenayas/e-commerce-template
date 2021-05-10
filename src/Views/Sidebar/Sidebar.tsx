import {Box} from "@material-ui/core";
import {Sorting} from "Components";
import {FilterBrand} from "Components";

const Sidebar = () => {
  return (
    <Box width="25%" paddingRight={2}>
      <Sorting />
      <FilterBrand />
    </Box>
  );
};

export default Sidebar;
