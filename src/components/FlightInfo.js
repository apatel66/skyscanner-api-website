import React, { useState } from 'react';
import './FlightInfo.css';
import './WebsiteInfo.css';
import Flights from './Flights';

function FlightInfo() { 
    const [flights,setFlights] = useState([])
    const [dep,setQueryDep] = useState("")
    const [dest,setQueryDest] = useState("")
    const [depDate,setQueryDepDate] = useState("")
    const [destDate,setQueryDestDate] = useState("")
    const [currencyIn,setQueryCurrency] = useState("")
    const [showFlights,setShowFlights] = useState(false)
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);

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
            var reqString = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/" + currencyIn + "/en-US/" + dep + "-sky/" + dest + "-sky/" + depDate + "/?" + new URLSearchParams({inboundpartialdate: destDate});
            let response = await fetch(reqString, reqOptions)
            response = await response.json()
            //console.log(response)
            setFlights(response)
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
                <input id="dateFormOne" type="month" name="depDate" min={today} value={depDate} onChange={c => setQueryDepDate(c.target.value)} required />
                <input id="dateFormTwo" type="month" name="destDate" min={depDate} value={destDate} onChange={d => setQueryDestDate(d.target.value)} required />
                <select id="currency" placeholder="Currency" name="currency" value={currencyIn} onChange={e => setQueryCurrency(e.target.value)} required>  
                    <option defaultValue value=""> -- Currency -- </option>
                    <option value="USD">US Dollar</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="GBP">British Pound</option>
                    <option value="CNY">Chinese Yuan</option>
                    <option value="EUR">Euro</option>
                    <option value="INR">Indian Rupee</option>
                    <option value="JPY">Japanese Yen</option>
                    <option value="MXN">Mexican Peso</option>
                    <option value="RUB">Russian Ruble</option>
                </select>
                
                <button id="submitButton" className="search">Submit!</button>
           </form>

           <div className="websiteInfo">
                <h3>Welcome to the Skyscanner Flight Checker</h3>
                <p>Please enter the 3-letter airport codes in the "Departure" and "Destination" fields along with the desired departure date, return date, and currency. The best price will be indicated with <span>green</span> text.</p>
                <p>Don't know your airport code? <a rel="noreferrer" href="https://airportcod.es/#"target="_blank">Click Here</a></p>
            </div>

            { showFlights ? <Flights flights={flights}></Flights> : <></>}
        </div>
    )
}

export default FlightInfo;
