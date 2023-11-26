import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ address }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultZoom = 13;

  // Use OpenStreetMap Nominatim API for geocoding
  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon } = data[0]; // Pick first result
        setLocation([parseFloat(lat), parseFloat(lon)]);
      } else {
        console.error('No coordinates found for the given address.');
      }
    } catch (error) {
      console.error('Error during geocoding:', error);
    } finally {
      setLoading(false);
    }
  };

  // Perform geocoding when the component mounts or when the address prop changes
  React.useEffect(() => {
    setLoading(true);
    geocodeAddress(address);
  }, [address]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!location) {
    return <p>Unable to find coordinates for the given address.</p>;
  }

  return (
    <MapContainer center={location} zoom={defaultZoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marker */}
      <Marker position={location}>
        <Popup>
          Location based on address: {address} <br />
          Coordinates: {location[0]}, {location[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
