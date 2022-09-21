import React from 'react'
import { MapContainer, TileLayer, ZoomControl, Marker} from "react-leaflet";
import L from "leaflet";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";
const position = [50.45, 30.5];

const Map = () => {
  return (
    <div>
      <MapContainer
            eventHandlers={{ DataView: () => console.log("click") }}
            center={position}
            zoom={12}
            scrollWheelZoom={false}
          >
             <TileLayer
            attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            <ZoomControl position="bottomright" />
              <Marker position={[51.505, -0.09]}/>
            
          </MapContainer>
    </div>
  );
}

export default Map
