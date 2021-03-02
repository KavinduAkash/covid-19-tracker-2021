import React from 'react';
import 'leaflet/dist/leaflet.css';
import './map.style.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class MapComponent extends React.Component {
    render() {
        return(
            <div className={'map'}>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        )
    }
}

export default MapComponent;