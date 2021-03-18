import React from 'react';
import './Flights.css';

function Flights (props) { 
    console.log(props);
    const carriers = props.flights['Carriers'];
    const currencies = props.flights['Currencies'];
    const places = props.flights['Places'];
    const quotes = props.flights['Quotes'];
    if(!places || !carriers || !currencies || !quotes) return null;
    var placeMap = new Map();
    for (var i = 0; i < places.length; ++i) {
        placeMap.set(places[i].PlaceId, places[i].CityName);
    }
    var carriersMap = new Map();
    for (i = 0; i < carriers.length; ++i) {
        carriersMap.set(carriers[i].CarrierId, carriers[i].Name);
    }

    console.log(carriers);
    console.log(currencies);
    console.log(places);
    console.log(quotes);
    console.log(placeMap);
    console.log(carriersMap);
    return(
        <div className="flights">
            <table className="flightTable">
                <thead>
                    <tr>
                        <th>Start City</th>
                        <th>End City</th>
                        <th>Carrier</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {quotes && quotes.map(f => {
                        return (<tr key="{flight.placeId}">
                            <td>{placeMap.get(f.OutboundLeg.OriginId)}</td>
                            <td>{placeMap.get(f.OutboundLeg.DestinationId)}</td>
                            <td>{carriersMap.get(f.OutboundLeg.CarrierIds[0])}</td>
                            <td>{currencies[0].Symbol+f.MinPrice}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Flights;



/*import React from 'react';
import './Places.css';

function Places(props) { 
    return(
        <div className = "places">
            <table>
                <thead>
                    <tr>
                        <th>Departure Code</th>
                        <th>Departure</th>
                        <th>Destination Code</th>
                        <th>Destination</th>
                        <th>Cost</th>
                    </tr>
                </thead>

                <tbody>
                    {props.places.map(place => {
                        return (
                            <tr id={place.PlaceId}> 
                                <th>{place.PlaceId}</th>
                                <th>{place.PlaceName}</th>
                                <th>{place.DestId}</th>
                                <th>{place.DestName}</th>
                                <th>(place.Price)</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Places;*/