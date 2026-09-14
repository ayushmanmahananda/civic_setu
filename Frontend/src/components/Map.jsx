import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import IssueForm from "./IssueForm";

function Map(props) {
  const [issues, setIssues] = useState([]);

  const [selectedLocation, setSelectedLocation] = useState({});

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
            <Popup>
              <b>{issue.type}</b>
              <br />
              {issue.description}
            </Popup>
          </Marker>
        ))}

        <LocationMarker setSelectedLocation={setSelectedLocation} />

        {selectedLocation?.lat !== undefined && (
          <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
            <Popup>New Issue</Popup>
          </Marker>
        )}
      </MapContainer>
      <IssueForm
        setIssues={setIssues}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </>
  );
}

export default Map;
