import React from 'react'

function House(props) {
    let { id, name, address, city, state, zip} = props.house
    return (
        <div>
            <div>

                <p>Property Name: {name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>

            </div>
            <button onClick={() => props.deleteHouse(id)}>delete</button>
        </div>
    )
}

export default House