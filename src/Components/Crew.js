import React, { useEffect, useState } from "react";
import "../Styles/Style.css";
import "../Styles/Queries.css";
import Loader from "./Loader";

function Crew() {

  const [crewData, setCrewData] = useState([]);
  const [selectedCrew, setSelectedCrew] = useState(null);
  // const[isLoading,setIsLoading]=useState("1");

  useEffect(() => {
    fetch("http://demo7999527.mockable.io/space-tourism-data")
      .then((Response) => Response.json())
      .then((Response) => setCrewData(Response.crew))
      .catch((Response) => console.log("error fetching the data"));
  }, []);

  useEffect(() => {
    if (crewData.length > 0) {
      setSelectedCrew(crewData[0].name);
    }
  }, [crewData]);

  const handleCrewClick = (CrewName) => {
    setSelectedCrew(CrewName);
    // console.log(selectedCrew);
  };

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
          {" "}
          <span className="head head-5">
            <span className="number">02</span>MEET YOUR CREW
          </span>
        </div>
          {selectedCrewData&&(
        <div className="content-crew">
          <h1 id="role" className="head head-5">
            {selectedCrewData.role}
          </h1>
          <h2 className="head head-4">{selectedCrewData.name}</h2>
          <p className="typography">{selectedCrewData.bio}</p>
        </div>
        )}
         {selectedCrewData&&(
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
              onClick={() => handleCrewClick(crew.name)}
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
