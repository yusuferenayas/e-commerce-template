import {Box} from "@material-ui/core";
import {Sorting} from "Components";
import React from "react";

const Sidebar = () => {
  return (
    <Box width="25%" paddingRight={2}>
      <Sorting />
    </Box>
  );
};

export default Sidebar;
