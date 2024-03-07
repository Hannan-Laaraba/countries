import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/navbar";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Countries() {
  const url = "https://restcountries.com/v3.1/all"


  // Fetching 5 countries from URL
  // function displayFive(countries) {
  //   for (let i = 0; i < Math.min(5, countries.length); i++) {
  //         console.log(countries[i]);
  //     }
  //   };

  const [country, setCountry] = useState([]);
    
 useEffect(() => {
    async function displayAllCountries() {
      try {
        const countries = await axios.get(url)
        const countriesBox = countries.data
        console.log("Box", countriesBox)

        setCountry(countriesBox);
      } catch (error) {
        console.log(error)
      }
    }

    displayAllCountries();
    
  }, []);

  console.log("country", country);




  return (
    <>
    <Navbar />
     <div>
      <h1>Countries In The World</h1>
     </div>
    <div className="outer-div">
        {country.slice(0, 200).map((item) => (
            <div className="inner-div">
                {/* <img src={item.coatOfArms.svg} alt={item.name.common}></img> */}
                <img className="flag" src={item.flags.png} alt={item.flag.alt} ></img>
                <h2>{item.name.common}</h2>
                <h3>{item.continents}</h3>
                <br/>
                <button className="btn"><Link to={`/Country/${item.name.common}`} >View More</Link></button>
            </div>
        ))}

    </div>
    </>
  );
}
