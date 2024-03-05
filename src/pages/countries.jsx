import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/navbar";
import axios from "axios";

export default function Countries () {
    const url = 'https://restcountries.com/v3.1/all'

    // const [countries_endpoint, setCountries] = useState(null)


    // function displayCountries(){
    //     let allCountries= fetch (url)
        
    //     .then((response) => {
    //         console.log('country', response.json())
    //     }) 
    // }

    // displayCountries()

    // Fetching 5 countries from URL
   // function displayFive(countries) {
     //   for (let i = 0; i < Math.min(5, countries.length); i++) {
   //         console.log(countries[i]);
   //     }
 //   };

 const [fiveCountries, setFiveCountries] = useState ([]);

 

 

 async function displayAllCountries() {
    const countries = await axios.get(url);
    const countriesBox = countries.data;

    
    const slicedData = countriesBox.slice(0, 5);


    slicedData.map(country => {
        console.log(country.name.common);
    });

    return countriesBox;
}

displayAllCountries();

// setFiveCountries(fiveItems);
// console.log({iveCountries});
// return countriesBox;
    



   
//     function fiveCountries (){
//         let fiveItems = countriesBox.slice(0, 4)

//         console.log('five', fiveItems)

//         //let countriesBox = []
//     }

//    fiveCountries ()

    // let countries =["USA", "Canada", "UK", "Germany", "France", "Japan","Ghana", "Togo","Benin", "Ivory Coast", "Niger",]

    // displayFive(countries);



    //  function displayFive (){
    //     let countries =  ["Ghana", "Togo","Benin", "Ivory Coast", "Niger"]

    //      countries.map (country => {
    //     console.log(country)
    // })

    // };
    
    // displayFive()



    return(
        <>
        <Navbar />
        <h1>Countries In The World</h1>
        <div>
            {fiveCountries.map((value) => {
                let val= value.name.common 
                return <p>{val}</p>

            })}
        </div>
        </>
        
    )

};

    
