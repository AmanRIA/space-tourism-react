import React, { useEffect, useState } from "react";
import "../Styles/Style.css";
import "../Styles/Queries.css";
import Loader from "./Loader";

function Destination() {
  const [destData, setDestData] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    fetch("http://demo7999527.mockable.io/space-tourism-data")
      .then((response) => response.json())
      .then((data) => setDestData(data.destinations))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    if (destData.length > 0) {
      setSelectedDestination(destData[0].name);
    }
  }, [destData]);

  const handleDestinationClick = (destinationName) => {
    setSelectedDestination(destinationName);
  };

  const selectedDestinationData = destData.find(
    (destination) => destination.name === selectedDestination
  );

  return (
    <main>
      <section className="main-section-dest">
        {destData.length === 0 ? (
          <Loader />
        ) : (
          <React.Fragment>
            <div className="heading">
              <span className="head head-5">
                <span className="number">01</span>PICK YOUR DESTINATION
              </span>
            </div>

            <figure className="figure-dest">
            {selectedDestinationData && (
            <img
              id="dest-img"
              src={selectedDestinationData.images.png}
              alt={selectedDestinationData.name}
            />
          )}
            </figure>
            <div className="content">
              <div className=" content-nav">
                <ul className="content-nav-list">
                  {destData.map((destination) => (
                    <li key={destination.name}>
                      <a
                        className={`content-nav-link ${
                          selectedDestination === destination.name
                            ? "active"
                            : ""
                        }`}
                        href="#"
                        onClick={() => handleDestinationClick(destination.name)}
                      >
                        {destination.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {selectedDestinationData && (
                <div>
                  <h1 className="head head-1">
                    {selectedDestinationData.name}
                  </h1>
                  <p className="typography">
                    {selectedDestinationData.description}
                  </p>
                  <div className="line"></div>
                  <div className="stats">
                    <div className="stat">
                      <div className="typography">AVG. DISTANCE</div>
                      <div className="statval1">
                        {selectedDestinationData.distance}
                      </div>
                    </div>
                    <div className="stat">
                      <div className="typography">EST. TRAVEL TIME</div>
                      <div className="statval2">
                        {selectedDestinationData.travel}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        )}
      </section>
    </main>
  );
}

export default Destination;
