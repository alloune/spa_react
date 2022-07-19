import Nav from "./Nav";
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import React, {useState} from 'react';

function SuppliersMap() {

    const [data] = React.useState({
        suppliers: [
            {
                id: 1,
                latitude: 10,
                longitude: 10,
            },
            {
                id: 2,
                latitude: 11,
                longitude: 9.6,
            },

        ]
    })

    return (

        <div>
            <Nav/>
            <h1> La carte </h1>
            <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    data.suppliers.map( element => {
                        return (
                            <Marker position={[element.latitude, element.longitude]}>
                                <Popup>
                                    A pretty CSS3 popup. <br/> Easily customizable.
                                </Popup>
                            </Marker>
                        )
                    })
                }

            </MapContainer>
        </div>
    );
}

export default SuppliersMap