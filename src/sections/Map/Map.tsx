import MapComponent from '../../components/MapComponent/MapComponent';
import './Map.scss';
import { locations } from '../../constants/constants';

const Map = () => {
  const columnSize = Math.ceil(locations.length / 3);
  const columns = [
    locations.slice(0, columnSize),
    locations.slice(columnSize, columnSize * 2),
    locations.slice(columnSize * 2),
  ];

  return (
    <section className="map">
      <div className="row">
        <div className="col-xl-6">
          <MapComponent />
        </div>
        <div className="col-xl-6 ps-3 d-none d-xl-block py-5">
          <h2 className="section-title ms-0 text-start mb-2 mt-2">Where we do</h2>
          <h3 className="section-subtitle text-start m-0">Our Locations</h3>
          <div className="business-locatios">
            <div className="row">
              {columns.map((col, colIndex) => (
                <div className="col-4" key={colIndex}>
                  <ul className="locations">
                    {col.map((location, index) => (
                      <li className="location" key={index}>
                        <i className="bi bi-geo-alt-fill"></i> {/* Bootstrap icon */}
                        {location.name} - {location.address}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
