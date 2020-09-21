import React from "react";
import MoviesApp from "./MoviesApp";
import Smdata from "./m_data";

const Moviesmap = (mapping) => {
  return (
    <MoviesApp
      img={mapping.img}
      distributor={mapping.distributor}
      title={mapping.title}
      link={mapping.link}
    />
  );
};

function App() {
  return (
    <>
      {Smdata.map((mapping) => {
        return (
          <MoviesApp
            key={mapping.id}
            img={mapping.img}
            distributor={mapping.distributor}
            title={mapping.title}
            link={mapping.link}
          />
        );
      })}
    </>
  );
}

export default App;
