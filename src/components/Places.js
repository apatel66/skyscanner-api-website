import React from 'react';
import './Places.css';

function Places(props) { 

    return(
        <div className="flights">
            <table class="flightTable">
                <thead>
                    <tr>
                        <th>Airport ID</th>
                        <th>Airport Name</th>
                        <th>Country ID</th>
                        <th>Region ID</th>
                        <th>City ID</th>
                        <th>Country Name</th>
                    </tr>
                </thead>

                <tbody>
                    {props.places && props.places.map(place => {
                        return (<tr id={place.PlaceId}>
                            <th>{place.PlaceId}</th>
                            <th>{place.PlaceName}</th>
                            <th>{place.CountryId}</th>
                            <th>{place.RegionId}</th>
                            <th>{place.CityId}</th>
                            <th>{place.CountryName}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Places;

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