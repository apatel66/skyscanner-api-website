import React, { useState } from 'react';
import './FlightInfo.css';
import Places from './Places';

function FlightInfo() { 
    const [places,setPlaces] = useState([])
    const [dep,setQueryDep] = useState("")
    const [dest,setQueryDest] = useState("")
    const [depDate,setQueryDepDate] = useState("")
    const [destDate,setQueryDestDate] = useState("")
    const [currency,setQueryCurrency] = useState("")
    const [showPlaces,setShowPlaces] = useState(false)

    function handleSubmit(b) {
        b.preventDefault()
        async function fetchMyAPI() {
            const reqOptions = {
                method: 'GET',
                headers: {
                    //"RapidAPI App": "default-application_5126913",
                    "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: dep}), reqOptions)
            response = await response.json()
            console.log(response.Places)
            setPlaces(response.Places)
        }
        fetchMyAPI()
        setShowPlaces(true)
        setQueryDep("")
        setQueryDest("")
        setQueryDepDate("")
        setQueryDestDate("")
        setQueryCurrency("")
    }

    return(
        <div className="flightInfo">
           <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">State or Country:</label>
                <input id="queryInput" placeholder="Departure" value={dep} onChange={a => setQueryDep(a.target.value)} required/>
                <input id="queryInput" placeholder="Destination" value={dest} onChange={b => setQueryDest(b.target.value)} required/>
                <input id="dateFormOne" type="date" name="depDate" value={depDate} onChange={c => setQueryDepDate(c.target.value)} required />
                <input id="dateFormTwo" type="date" name="destDate" value={destDate} onChange={d => setQueryDestDate(d.target.value)} required />
                <select id="currency" placeholder="Currency" name="currency" value={currency} onChange={e => setQueryCurrency(e.target.value)} required>  
                    <option value="USD" selected>US Dollar</option>
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
           { showPlaces ? <Places places={places}></Places> : <></>}
        </div>
    )
}

export default FlightInfo;
