import React from "react";
import Smdata from "./m_data";

const Data = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.img} alt="movie poster" className="card__img" />
          <div className="card__info">
            <span className="card__category">{props.distributor}</span>
            <h3 className="card__title">{props.title}</h3>
            <a href={props.link} target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
