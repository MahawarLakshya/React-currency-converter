import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    //api call while loading this hook api-https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/currencies/{currencyCode}.json

   // example: https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json


    // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-05/v1/currencies/eur.json

      const[data,setData]=useState({})
        useEffect(() => {
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

            .then((res)=>res.json())//convert the response to json 
            .then((res)=>setData(res[currency]))
            console.log(data);
             
            }, [currency])
        console.log(data);
        return data;
}  

export default useCurrencyInfo;