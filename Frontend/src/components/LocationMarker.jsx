import { useMapEvents } from "react-leaflet";

const LocationMarker = ({ setSelectedLocation }) => {

  useMapEvents({
    click(e) {
      console.log("Map clicked:", e.latlng);
 
      setSelectedLocation({
        lat: e.latlng.lat,
        lng: e.latlng.lng
      });
    }
  });

  return null;
};

export default LocationMarker;