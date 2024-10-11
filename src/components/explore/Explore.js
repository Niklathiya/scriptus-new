import React from "react";
import "./explore.css";

const Explore = () => {
  const exploredata = [
    { name: "Bedroom" },
    { name: "Dinning Room" },
    { name: "Meeting Room" },
    { name: "Workspace" },
    { name: "Living Room" },
    { name: "Kitchen" },
  ];
  return (
    <section className="explore-wrapper">
      <div className="custom-container">
        <h2 className="font-color-dark res-heading">Explore by Category</h2>
        <div className="explore-container">
          <div className="explore-sidebar">
            <form>
              <input type="search" placeholder="Search" />
            </form>
          </div>

          <div className="explore-category-view">
            {exploredata.map((explore, index) => {
              return (
                <div  key={index} className="category-view-container">
                  <div className="category-view-box">
                    <h2 className="category-title">{explore.name}</h2>
                    <button className="hero-button">
                        <p>Explore</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
