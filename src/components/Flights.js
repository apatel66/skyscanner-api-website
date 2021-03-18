import React from 'react';
import './Flights.css';

function Flights (props) { 
    //Split the object into its different sections
    const carriers = props.flights['Carriers'];
    const currencies = props.flights['Currencies'];
    const places = props.flights['Places'];
    const quotes = props.flights['Quotes'];

    //Don't try to access data if its undefined
    if (!places || !carriers || !currencies || !quotes) {
        return null;
    }  

    //Map the airports and the IATA code with their id for easy lookup later on
    var placeMap = new Map();
    for (var i = 0; i < places.length; ++i) {
        placeMap.set(places[i].PlaceId, places[i].CityName + " (" + places[i].IataCode + ")");
    }

    //Map the carriers with their id for easy lookup later on
    var carriersMap = new Map();
    for (i = 0; i < carriers.length; ++i) {
        carriersMap.set(carriers[i].CarrierId, carriers[i].Name);
    }

    //If there is no data, make a single row table saying "No Result"
    if (quotes.length === 0) {
        return (
            <div className="flights">
                <table className="flightTable">
                    <thead>
                        <tr> <th>No Result</th> </tr>
                    </thead>
                </table>
            </div>
        )
    }

    //Make sure the data is in the proper spot
    /*console.log(props);
    console.log(carriers);
    console.log(currencies);
    console.log(places);
    console.log(quotes);*/

    //Use the maps created earlier to get the required data
    return(
        <div className="flights">
            <table className="flightTable">
                <thead>
                    <tr>
                        <th>Start City</th>
                        <th>End City</th>
                        <th>Date</th>
                        <th>Carrier</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {quotes && quotes.map(f => {
                        return (<tr key={f.QuoteId}>
                            <td>{placeMap.get(f.OutboundLeg.OriginId)}</td>
                            <td>{placeMap.get(f.OutboundLeg.DestinationId)}</td>
                            <td>{f.OutboundLeg.DepartureDate.substring(0,10)}</td>
                            <td>{carriersMap.get(f.OutboundLeg.CarrierIds[0])}</td>
                            <td>{currencies[0].Symbol + f.MinPrice}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Flights;