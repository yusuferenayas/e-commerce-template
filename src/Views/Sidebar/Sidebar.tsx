import {Box} from "@material-ui/core";
import {Sorting} from "Components";
import {Filter} from "Components/Filter";

const Sidebar = () => {
  return (
    <Box width="25%" paddingRight={2}>
      <Sorting />
      <Filter />
    </Box>
  );
};

export default Sidebar;
