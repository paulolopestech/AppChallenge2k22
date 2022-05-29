import React, { useEffect, useRef, useState } from "react";
import './mapa.css';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer } from "react-leaflet";
import osm from "./osm-providers";

function Mapa(props) {
    const [center, setCenter] = useState({lat: 10, lng: 10});

    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

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
}

export default Mapa;