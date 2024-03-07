import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Country() {
  const [country, setCountry] = useState(null);
 

  const Params = useParams();
//   console.log("see", Params);

  const url = `https://restcountries.com/v3.1/name/${Params.countryName}`;

  useEffect(() => {
    async function displayOneCountry() {
      try {
        const countries = await axios.get(url)
        const countriesBox = countries.data
        console.log("Box", countriesBox[0])

        setCountry(countriesBox[0]);
      } catch (error) {
        console.log(error)
      }
    }

    displayOneCountry();

  }, [Params.countryName])

  if (!country){
    return <div>Loading...</div>;
  }
  




  console.log("country", country)

  return (
    <>
      <Navbar />
      <h1> Welcome </h1>
      <div className="yaah">
          <h1>Continent : {country.continents}</h1>
          <h2>Country : {country.name.common}</h2>
           <h3>Capital : {country.capital}</h3>
           <h4>{country.timezones} </h4>
           <a href={country.maps.googleMaps}> FIND ME </a>
           <img src={country.coatOfArms.svg}></img>
      </div>
    </>
  );
}
