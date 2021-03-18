import React, { useState } from 'react';
import './FlightInfo.css';
import Flights from './Flights';

function FlightInfo() { 
    const [flights,setFlights] = useState([])
    const [dep,setQueryDep] = useState("")
    const [dest,setQueryDest] = useState("")
    const [depDate,setQueryDepDate] = useState("")
    const [destDate,setQueryDestDate] = useState("")
    const [currencyIn,setQueryCurrency] = useState("")
    const [showFlights,setShowFlights] = useState(false)

    function handleSubmit(b) {
        b.preventDefault()
        async function fetchMyAPI() {
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }
            console.log(dep);
            console.log(dest);
            console.log(depDate);
            console.log(destDate);
            console.log(currencyIn);
            var reqString = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/" + currencyIn + "/en-US/" + dep + "-sky/" + dest + "-sky/" + depDate + "?" + new URLSearchParams({inboundpartialdate: destDate})
            console.log(reqString)
            let response = await fetch(reqString, reqOptions)
            response = await response.json()
            console.log(response)
            setFlights(response.Places)
        }
        fetchMyAPI()
        setShowFlights(true)
        setQueryDep("")
        setQueryDest("")
        setQueryDepDate("")
        setQueryDestDate("")
        setQueryCurrency("")
    }

    return(
        <div className="flightInfo">
           <form onSubmit={handleSubmit}>
                <input id="queryInput" placeholder="Departure" value={dep} onChange={a => setQueryDep(a.target.value)} required/>
                <input id="queryInput" placeholder="Destination" value={dest} onChange={b => setQueryDest(b.target.value)} required/>
                <input id="dateFormOne" type="date" name="depDate" value={depDate} onChange={c => setQueryDepDate(c.target.value)} required />
                <input id="dateFormTwo" type="date" name="destDate" value={destDate} onChange={d => setQueryDestDate(d.target.value)} required />
                <select id="currency" placeholder="Currency" name="currency" value={currencyIn} onChange={e => setQueryCurrency(e.target.value)} required>  
                    <option defaultValue value=""> -- Currency -- </option>
                    <option value="USD">US Dollar</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="GBP">British Pound</option>
                    <option value="CNY">Chinese Yuan</option>
                    <option value="EUR">Euro</option>
                    <option value="DEM">German Mark</option>
                    <option value="GRD">Greek Drachma</option>
                    <option value="INR">Indian Rupee</option>
                    <option value="JPY">Japanese Yen</option>
                    <option value="MXN">Mexican Peso</option>
                    <option value="RUB">Russian Ruble</option>
                </select>
                
                <button id="submitButton" className="search">Submit!</button>
           </form>
           { showFlights ? <Flights flights={flights}></Flights> : <></>}
        </div>
    )
}

export default FlightInfo;
