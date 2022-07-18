import Nav from "./Nav";
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'

function SuppliersMap() {
    return (

        <div>
            <Nav/>
            <h1> La carte </h1>
            <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default SuppliersMap