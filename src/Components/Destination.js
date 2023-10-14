import React, { useEffect, useState } from "react";
import "../Styles/Style.css";
import "../Styles/Queries.css";
import Loader from "./Loader";

function Destination() {
  const [destData, setDestData] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://demo7999527.mockable.io/space-tourism-data")
      .then((response) => response.json())
      .then((data) => {
        setDestData(data.destinations);
        console.log(destData);

        // if (destData.length > 0) {
        setSelectedDestination(data.destinations[0].name);

        // }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const selectedDestinationData =
    destData === null
      ? null
      : destData.find(
          (destination) => destination.name === selectedDestination
        );
  console.log(selectedDestination);

  return (
    <main>
      <section className="main-section-dest">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {destData === null ? (
              <p>No data Found</p>
            ) : destData.length === 0 ? (

              <p>No data found</p>
            ) : (
              <>
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
                            onClick={() =>
                              setSelectedDestination(destination.name)
                            }
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
              </>
            )}
          </>
        )}
      </section>
    </main>
  );
}

export default Destination;
