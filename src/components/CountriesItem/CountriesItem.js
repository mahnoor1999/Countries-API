import React, { useEffect, useState } from "react";
import { getCountries } from "../../service";

const CoutriesItem = ({ InputValue }) => {
  const [countries, updateCountries] = useState([]);
  useEffect(() => {
    getCountries().then((information) => {
      updateCountries(information);
    });
  }, []);

  let listOfCountries = countries.map((country) => {
    let countryInCapitalCase = country.name.toUpperCase()
    let inputInCapitalCase = InputValue.toUpperCase()
    if (countryInCapitalCase.includes(inputInCapitalCase)) {
      return (
        <>
          <div className=" bg-white h-64 rounded-lg hover:bg-gray-200">
            <div className="flex flex-col justify-center align-center ">
              <h2 className="font-bold text-xl mb-5 p-2 bg-teal-500 text-white uppercase pl-4 ">
                {country.name}
              </h2>
              <ul className="text-gray-700 text-lg pl-4">
                <li>
                  {" "}
                  <span className="font-semibold"> Capital: </span>
                  {country.capital}
                </li>
                <li>
                  {" "}
                  <span className="font-semibold"> Region: </span>
                  {country.region}
                </li>
                <li>
                  {" "}
                  <span className="font-semibold"> Population: </span>
                  {country.population}
                </li>
                <li>
                  {" "}
                  <span className="font-semibold"> Area: </span>
                  {country.area}
                </li>
                <li>
                  {" "}
                  <span className="font-semibold"> Demonym: </span>
                  {country.demonym}
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    }
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3  gap-6   px-6 sm:px-8 md:px-12 lg:px-20 ">
      {listOfCountries}
    </div>
  );
};
export default CoutriesItem;
