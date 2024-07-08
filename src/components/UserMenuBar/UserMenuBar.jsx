import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const UserMenuBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
      <Tab label="Popular" />
      <Tab label="Featured" />
      <Tab label="Most Booked" />
      <Tab label="Most Favorite" />
      <Tab label="Recent Experience" />
      <Tab label="Recommend Experience" />
    </Tabs>
  );
};

export default UserMenuBar;
