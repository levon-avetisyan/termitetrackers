import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import './MapComponent.scss';
import { locations } from '../../constants/constants';
export const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const mapStyles = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [{ saturation: -100 }, { lightness: 50 }],
  },
];

const mapOptions = {
  gestureHandling: 'none',
  disableDefaultUI: true,
  draggable: false,
  scrollwheel: false,
  disableDoubleClickZoom: true,
  keyboardShortcuts: false,
  styles: mapStyles, // Add the styles here
};

const MapComponent = () => {
  return (
    <>
      <APIProvider apiKey={apiKey} onLoad={() => console.log('Map loaded')}>
        <Map
          style={{
            width: '100%',
            minHeight: '500px',
            maxHeight: '600px',
            display: 'block',
            margin: '0 auto',
          }}
          defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
          defaultZoom={4}
          options={mapOptions} // Use the mapOptions here
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              title={location.name}
            />
          ))}
        </Map>
      </APIProvider>
    </>
  );
};

export default MapComponent;
