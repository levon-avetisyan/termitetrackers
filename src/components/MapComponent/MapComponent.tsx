import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import "./MapComponent.scss"
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const locations = [
  { name: "Albany", lat: 42.6526, lng: -73.7562, address: "Albany, NY" },
  { name: "Baton Rouge", lat: 30.4515, lng: -91.1871, address: "Baton Rouge, LA" },
  { name: "Bloomington", lat: 40.4842, lng: -88.9937, address: "Bloomington, IL" },
  { name: "Boston North Shore", lat: 42.465, lng: -70.9495, address: "Boston North Shore, MA" },
  { name: "Chicago North", lat: 42.0451, lng: -87.6877, address: "Chicago North, IL" },
  { name: "Chicago South", lat: 41.7508, lng: -87.6318, address: "Chicago South, IL" },
  { name: "Corpus Christi", lat: 27.8006, lng: -97.3964, address: "Corpus Christi, TX" },
  { name: "DC West", lat: 38.9072, lng: -77.0369, address: "DC West" },
  { name: "DFW", lat: 32.7767, lng: -96.797, address: "DFW, TX" },
  { name: "Harrisburg", lat: 40.2732, lng: -76.8867, address: "Harrisburg, PA" },
  { name: "Hartford", lat: 41.7637, lng: -72.6851, address: "Hartford, CT" },
  { name: "Lafayette", lat: 30.2241, lng: -92.0198, address: "Lafayette, LA" },
  { name: "Lexington", lat: 38.0406, lng: -84.5037, address: "Lexington, KY" },
  { name: "Long Island", lat: 40.7891, lng: -73.1349, address: "Long Island, NY" },
  { name: "Lubbock", lat: 33.5779, lng: -101.8552, address: "Lubbock, TX" },
  { name: "Manchester", lat: 42.9956, lng: -71.4548, address: "Manchester, NH" },
  { name: "McAllen", lat: 26.2034, lng: -98.230, address: "McAllen, TX" },
  { name: "Midland", lat: 31.9974, lng: -102.0779, address: "Midland, TX" },
  { name: "New Jersey", lat: 40.0583, lng: -74.4057, address: "New Jersey, NJ" },
  { name: "Northshore", lat: 30.5052, lng: -90.0895, address: "Northshore, LA" },
  { name: "Orlando", lat: 28.5383, lng: -81.3792, address: "Orlando, FL" },
  { name: "Oxford", lat: 41.4253, lng: -73.1164, address: "Oxford, CT" },
  { name: "Pittsburgh", lat: 40.4406, lng: -79.9959, address: "Pittsburgh, PA" },
  { name: "Providence", lat: 41.824, lng: -71.4128, address: "Providence, RI" },
  { name: "Raleigh", lat: 35.7796, lng: -78.6382, address: "Raleigh, NC" },
  { name: "Virginia Beach", lat: 36.8529, lng: -75.978, address: "Virginia Beach, VA" },
  { name: "Westchester", lat: 41.122, lng: -73.7949, address: "Westchester, NY" },
];

const mapStyles = [
  {
    "featureType": "all",
    "elementType": "all",
    "stylers": [
      { "saturation": -100 },
      { "lightness": 50 }
    ]
  }
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
  return (<>
      <APIProvider apiKey={apiKey} onLoad={() => console.log('Map loaded')}>
        <Map
          style={{ width: '100%', minHeight: '500px', maxHeight: '600px', display: 'block', margin: '0 auto' }}
          defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
          defaultZoom={4}
          options={mapOptions} // Use the mapOptions here
        >
          {locations.map((location, index) => (
            <Marker key={index} position={{ lat: location.lat, lng: location.lng }} title={location.name} />
          ))}
        </Map>
      </APIProvider>
    </>
)};

export default MapComponent;