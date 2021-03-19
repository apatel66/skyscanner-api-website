import React, { useState } from 'react';
import './FlightInfo.css';
import './WebsiteInfo.css';
import Flights from './Flights';

function FlightInfo() { 

    //Create the variables for the different paramenters we need
    const [outgoingFlights,setOutgoingFlights] = useState([])
    const [incomingFlights,setIncomingFlights] = useState([])
    const [dep,setQueryDep] = useState("")
    const [dest,setQueryDest] = useState("")
    const [depDate,setQueryDepDate] = useState("")
    const [depDay,setQueryDepDay] = useState("")
    const [destDate,setQueryDestDate] = useState("")
    const [destDay,setQueryDestDay] = useState("")
    const [currencyIn,setQueryCurrency] = useState("")
    const [showOutgoingFlights,setShowOutgoingFlights] = useState(false)
    const [showIncomingFlights,setShowIncomingFlights] = useState(false)

    //Get today's date to use as a minimum for the data inputs
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm;

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

            //Consider if the user inputted days
            var goDate = depDate;
            var comebackDate = destDate;
            if (depDay !== "") {
                goDate = goDate + "-" + depDay;
            }
            if (destDay !== "") {
                comebackDate = comebackDate + "-" + destDay;
            }
            console.log(depDay);
            console.log(destDay);
            console.log(goDate);
            console.log(comebackDate);

            //Departing flights - Build the api string with the variables and call api
            var reqString = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/" + currencyIn + "/en-US/" + dep + "-sky/" + dest + "-sky/" + goDate;
            let response = await fetch(reqString, reqOptions)
            response = await response.json()
            response["flightType"] = "Departing Flights";
            setOutgoingFlights(response);

            //Returning flights - Build the api string with the variables and call api
            reqString = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/" + currencyIn + "/en-US/" + dest + "-sky/" + dep + "-sky/" + comebackDate;
            response = await fetch(reqString, reqOptions)
            response = await response.json()
            response["flightType"] = "Returning Flights";
            setIncomingFlights(response);
        }

        //Set default values
        fetchMyAPI()
        setShowOutgoingFlights(true)
        setShowIncomingFlights(true)
        setQueryDep("")
        setQueryDest("")
        setQueryDepDate("")
        setQueryDepDay("")
        setQueryDestDate("")
        setQueryDestDay("")
        setQueryCurrency("")
    }

    //Create the different types of input: Text - Airports, Calendar - Date, Select - Currency
    //Show a small text box about how to use the website for the user
    return(
        <div className="flightInfo">
           <form onSubmit={handleSubmit}>
                <input id="queryInput" placeholder="Departure*" value={dep} onChange={a => setQueryDep(a.target.value)} required/>
                <input id="queryInput" placeholder="Destination*" value={dest} onChange={b => setQueryDest(b.target.value)} required/>
                <input id="dateFormOne" type="month" name="depDate" min={today} value={depDate} onChange={c => setQueryDepDate(c.target.value)} required />
                <input id="dayOne" placeholder="Day" value={depDay} onChange={d => setQueryDepDay(d.target.value)}/>
                <input id="dateFormTwo" type="month" name="destDate" min={depDate} value={destDate} onChange={e => setQueryDestDate(e.target.value)} required />
                <input id="dayTwo" placeholder="Day" value={destDay} onChange={f => setQueryDestDay(f.target.value)}/>
                <select id="currency" placeholder="Currency" name="currency" value={currencyIn} onChange={g => setQueryCurrency(g.target.value)} required>  
                    <option defaultValue value=""> Currency* </option>
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
                
                <button id="submitButton" className="search">Search</button>
           </form>
           
           <div className="websiteInfo">
                <h3>Welcome to the Skyscanner Flight Checker</h3>
                <p>Please enter the 3-letter airport codes along with the desired departure date, return date, and currency. The "Day" fields are not required. The best price will be indicated with <span>green</span> text.</p>
                <p>Don't know the airport codes? <a rel="noreferrer" href="https://airportcod.es/#"target="_blank">Click Here</a></p>
            </div>

            { showOutgoingFlights ? <Flights flights={outgoingFlights}></Flights> : <></>}
            { showIncomingFlights ? <Flights flights={incomingFlights}></Flights> : <></>}
        </div>
    )
}

export default FlightInfo;
