import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const Cards = ({ results, page }) => {
  // displaying characters as cards with status badge

  let display;

  if (results) {
    display = results.map((character) => {
      let { id, name, image, location, status, gender, species, origin } =
        character;

      return (
        <Link
          to={`${page}${id}`}
          key={id}
          className="col-6 position-relative text-decoration-none mb-3"
        >
          <div className={`${styles.cards}`}>
            <div className="row">
              <img
                className={`${styles.img} img-fluid col-6`}
                src={image}
                alt={name}
              />
              <div className="col-6">
                <div className="fs-4 fw-bold">{name}</div>
                <div className="fs-6 mb-2 fw-bold">
                  {species} - {gender}
                </div>
                <div className="">
                  <div className="fs-6">
                    Current Location: <strong>{location.name}</strong>
                  </div>
                  <div className="fs-6 mt-1">
                    Origin: <strong>{origin.name}</strong>
                  </div>
                </div>
              </div>
              {(() => {
                if (status === "Alive") {
                  return (
                    <div
                      className={`${styles.badge} badge bg-success position-absolute`}
                    >
                      {status}
                    </div>
                  );
                } else if (status === "Dead") {
                  return (
                    <div
                      className={`${styles.badge} badge bg-danger position-absolute`}
                    >
                      {status}
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={`${styles.badge} badge bg-secondary position-absolute`}
                    >
                      {status}
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Cards;
