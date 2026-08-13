import "leaflet/dist/leaflet.css";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

const issues = [
  {
    id: 1,
    type: "Pothole",
    lat: 13.5549,
    lng: 80.0272,
    description: "Big pothole near the main gate",
  },
  {
    id: 2,
    type: "blocked drain",
    lat: 10.5549,
    lng: 78.0272,
    description: "Drain blocked near the street light",
  },
  {
    id: 3,
    type: "broken street light",
    lat: 15.5549,
    lng: 79.0272,
    description: "Street light not working of lane 4",
  },
];

function MapClickHandler() {
  useMapEvents({
    click(e) {
      console.log("Map clicked at ", e.latlng);
    },
  });
  return null;
}

function Map() {
  return (
    <>
      <MapContainer
        center={[28.598416, 77.219955]}
        zoom={4.5}
        scrollWheelZoom={true}
        style={{ height: "90vh", width: "50%" }}
      >
        <TileLayer
  attribution="&copy; OpenStreetMap contributors"
  url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
/>

        {issues.map((issue) => (
          <Marker key={issue.id} position={[issue.lat, issue.lng]}>
            <Popup>{issue.description}</Popup>
          </Marker>
        ))}

        <MapClickHandler />
      </MapContainer>
    </>
  );
}

export default Map;
