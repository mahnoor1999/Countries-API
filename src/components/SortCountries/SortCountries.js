import React from "react";
const SortCountries = ({ InputValue, changeValue }) => {
  return (
    <input
      placeholder="Search"
      type="text"
      value={InputValue}
      onChange={(event) => changeValue(event.target.value)}
      className="shadow appearance-none border rounded mr-2  py-2 pr-0 pl-1 sm:px-2 md:px-2 lg:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
};
export default SortCountries;
