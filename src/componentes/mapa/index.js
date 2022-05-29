import React, { useEffect, useRef, useState } from "react";
import './mapa.css';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer } from "react-leaflet";
import osm from "./osm-providers";

function Mapa(props) {
    const [center, setCenter] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setCenter({lat: pos.coords.latitude, lng: pos.coords.longitude})
        });
    }, []);

    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

    if(center.lat !== undefined)
    return(
        <div className="mapa" >
            <MapContainer
                center={center}
                zoom={ZOOM_LEVEL}
                ref={mapRef}
            >
                <TileLayer url={osm.maptiler.url} attribuition={osm.maptiler.attribution} />
            </MapContainer>
        </div>
    );
    else{
        return(<h1>Loading...</h1>);
    }
}

export default Mapa;