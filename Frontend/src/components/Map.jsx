import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import IssueForm from "./IssueForm";

function Map(props) {
  const [issues, setIssues] = useState([]);

  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <div className="relative w-full h-screen overflow-hidden " >
      <MapContainer
        center={[28.598416, 77.219955]}
        zoom={4.5}
        scrollWheelZoom={true}
        style={{ height: "90vh", width: "50%" }}
      >
        <TileLayer
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

        {/* jab koi bhi issue naho to ye dikao user ko taki asa na lage ki app kam nahi kar raha hai */}
        {issues.length === 0 && <div className="message">No issues reported in this area yet. Click anywhere on the map to report a problem!</div>}

        {selectedLocation?.lat !== undefined && (
          <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
            <Popup>New Issue</Popup>
          </Marker>
        )}
      </MapContainer>
       {selectedLocation?.lat !== undefined && (
       <IssueForm
        setIssues={setIssues}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
       )}
    </div>
  );
}

export default Map;
