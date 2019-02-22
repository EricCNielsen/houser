import React from 'react'

function House(props) {
    let { id, name, address, city, state, zip} = props.house
    return (
        <div>
            <p>Property Name: {name}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zip: {zip}</p>
        </div>
    )
}

export default House