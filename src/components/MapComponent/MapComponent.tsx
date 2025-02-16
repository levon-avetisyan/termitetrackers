import { APIProvider, Map, Marker, InfoWindow } from '@vis.gl/react-google-maps';
import './MapComponent.scss';
import { useState } from 'react';
import { locations } from '../../constants/constants';

export const mapStyles = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [{ saturation: -100 }, { lightness: 5 }],
  },
];

const mapOptions = {
  gestureHandling: 'auto',
  disableDefaultUI: true,
  draggable: true,
  scrollwheel: true,
  zoomControl: false,
  fullscreenControl: false,
  styles: mapStyles,
};

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <APIProvider apiKey={apiKey} onLoad={() => console.log('Map loaded')}>
      <Map
        style={{
          width: '100%',
          minHeight: '500px',
          maxHeight: '600px',
          display: 'block',
          margin: '0 auto',
          borderRadius: '8px',
        }}
        defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
        defaultZoom={4}
        options={mapOptions}
        onClick={() => setSelectedLocation(null)} // Close InfoWindow on map click
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.name}
            animation={selectedLocation?.name === location.name ? 'BOUNCE' : null} // Bounce effect for selected marker
            onClick={() => handleMarkerClick(location)}
          />
        ))}

        {selectedLocation && (
          <InfoWindow
            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div className="info-window-content">
              <h4>{selectedLocation.name}</h4>
              <p>
                <strong>Details:</strong> {selectedLocation.address}
              </p>
            </div>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
};

export default MapComponent;
