import Nav from "../components/Nav";
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import React, {useState, useEffect} from 'react';

import axios from "axios";

function SuppliersMap() {

    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        axios.get(`https://heroku-campus-suppliers.herokuapp.com/api/suppliers`)
            .then(res => {
                setSuppliers(res.data.data)
                setLoading(false);
            }).catch(function (e) {
            setLoading(false);
            setErrors(e);
        })
    }, [])


    return (

        <div>
            <Nav/>
            <h1 className="text-center text-5xl font-bold mt-20 mb-6"> La carte </h1>
            <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    suppliers.map(element => (

                        <Marker position={[element.latitude, element.longitude]}>
                            <Popup>
                                A pretty CSS3 popup. <br/> Easily customizable.
                            </Popup>
                        </Marker>)
                    )
                })
                }

            </MapContainer>
        </div>
    );
}

export default SuppliersMap