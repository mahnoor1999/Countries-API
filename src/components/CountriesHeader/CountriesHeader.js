import React from "react";
import CountriesItem from "../CountriesItem/CountriesItem";
import SortCountries from "../SortCountries/SortCountries";
const CountriesHeader = () => {
  const [InputValue, changeValue] = React.useState("");
  return (
    <div className="bg-yellow-400 h-full pb-64 ">
      <div className="mb-10 flex justify-around items-center w-full bg-pink-600 ">
       
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black  px-2 py-3  text-white text-center">
         Know About Your Country
        </h1>
        <SortCountries InputValue={InputValue} changeValue={changeValue} />
      </div>

        <CountriesItem InputValue={InputValue} />
      
    </div>
  );
};
export default CountriesHeader;
