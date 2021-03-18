import React from 'react';
import './Flights.css';

function Flights (props) { 
    return(
        <div className="flights">
            <table className="flightTable">
                <thead>
                    <tr>
                        <th>Airport ID</th>
                        <th>Airport Name</th>
                        <th>Iata Code</th>
                        <th>City ID</th>
                        <th>City Name</th>
                        <th>Country Name</th>
                    </tr>
                </thead>

                <tbody>
                    {props.flights && props.flights.map(flights => {
                        return (<tr key="{flights.placeId}">
                            <td>{flights.PlaceId}</td>
                            <td>{flights.Name}</td>
                            <td>{flights.IataCode}</td>
                            <td>{flights.CityId}</td>
                            <td>{flights.CityName}</td>
                            <td>{flights.CountryName}</td>
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