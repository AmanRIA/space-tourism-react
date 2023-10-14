import React, { useEffect, useState } from "react";
import "../Styles/Style.css";
import "../Styles/Queries.css";
import Loader from "./Loader";

function Technology() {
  const [techData, setTechData] = useState([]);
  const [selectedTech, setSelectedTech] = useState(null);

  useEffect(() => {
    fetch("http://demo7999527.mockable.io/space-tourism-data")
      .then((Response) => Response.json())
      .then((Response) => {
        setTechData(Response.technology);
        setSelectedTech(Response.technology[0].name);
      })
      .catch((Response) => console.log("error fetching the data"));
  }, []);

  
 

  const selectedTechData = techData.find((tech) => tech.name === selectedTech);

  return (
    <main>
      <section className="main-section-tech">
        {techData.length === 0 ? (
          <Loader />
        ) : (
          <React.Fragment>
            <div className="heading">
              {" "}
              <span className="head head-5">
                <span className="number">03</span>SPACE LAUNCH 101
              </span>
            </div>
            {selectedTechData && (
              <div className="content-tech">
                <h1 id="" className="head head-5">
                  THE TERMINOLOGY....
                </h1>
                <h2 className="head head-4">{selectedTechData.name}</h2>
                <p className="typography">{selectedTechData.description}</p>
              </div>
            )}
            {selectedTechData && (
              <figure className="figure-tech">
                <img id="Tech-img" src={selectedTechData.images.portrait} />
              </figure>
            )}{" "}
            <div className="verticle-pagination">
              {techData.map((tech,index) => (
                <div
                  className={`dots ${
                    selectedTech === tech.name ? "selected-dot" : ""
                  }`}
                  onClick={() => setSelectedTech(tech.name)}
                >
                  <h1  className="dot-number">{index+1}</h1>
                </div>
              ))}
            </div>
          </React.Fragment>
        )}
      </section>
    </main>
  );
}

export default Technology;
