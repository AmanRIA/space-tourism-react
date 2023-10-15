import React, { useEffect, useState } from "react";
import "../Styles/Style.css";
import "../Styles/Queries.css";
import Loader from "./Loader";

function Crew() {
  const [crewData, setCrewData] = useState([]);
  const [selectedCrew, setSelectedCrew] = useState(null);

  useEffect(() => {
    fetch("http://demo7999527.mockable.io/space-tourism-data")
      .then((Response) => Response.json())
      .then((Response) => {
        setCrewData(Response.crew);
        setSelectedCrew(Response.crew[0].name);
      })
      .catch((Response) => console.log("error fetching the data"));
  }, []);


  const selectedCrewData = crewData.find((crew) => crew.name === selectedCrew);

  // console.log(crewData)
  return (
    <main>
      <section className="main-section-crew">
        {crewData.length === 0 ? (
          <Loader />
        ) : (
          <React.Fragment>
            <div className="heading">
              
              <span className="head head-5">
                <span className="number">02</span>MEET YOUR CREW
              </span>
            </div>
            {selectedCrewData && (
              <div className="content-crew">
                <h1 id="role" className="head head-4">
                  {selectedCrewData.role.toUpperCase()}
                </h1>
                <h2 className="head head-3">{selectedCrewData.name.toUpperCase()}</h2>
                <p className="typography">{selectedCrewData.bio}</p>
              </div>
            )}
            {selectedCrewData && (
              <figure className="figure-crew">
                <img id="crew-img" src={selectedCrewData.images.png} />
              </figure>
            )}
            <div className="pagination">
              {crewData.map((crew) => (
                <div
                  className={`dots ${
                    selectedCrew === crew.name ? "selected-dot" : ""
                  }`}
                  onClick={() =>setSelectedCrew(crew.name)}
                ></div>
              ))}
            </div>
          </React.Fragment>
        )}
      </section>
    </main>
  );
}

export default Crew;
