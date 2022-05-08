import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
  let { id } = useParams();
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  let [fetchedData, setFetchedData] = useState([]);
  let [locData, setLocData] = useState([]);
  let [epiData, setEpiData] = useState([]);

  let { name, status, species, gender, origin, image, location } = fetchedData;
  let { residents } = locData;
  let episodes;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
      let locDetail = await fetch(data.location.url).then((res) => res.json());
      setLocData(locDetail);
      let epiDetail = await data.episode.map((epis) =>
        fetch(epis).then((res) => res.json())
      );
      Promise.all(epiDetail).then((values) => setEpiData(values));
    })();
  }, [api]);

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <img
            src={image}
            alt={name}
            className={`${styles.character_img} col card-img-top`}
          />
        </div>
        <div class={`${styles.character_info} col`}>
          <h4 className="text-white">Name : {name}</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <h6 className="card-text">
                Species : <em> {species}</em>
              </h6>
            </li>
            <li className="list-group-item">
              <h6 className="card-text">
                Gender : <em>{gender}</em>
              </h6>
            </li>
            <li className="list-group-item">
              <h6 className="card-text">
                Status : <em>{status}</em>
              </h6>
            </li>
            <li className="list-group-item">
              <h6>
                Origin : <em>{origin?.name}</em>
              </h6>
            </li>
            <li className="list-group-item">
              <h6>
                Last Known Location : <em>{location?.name}</em>
              </h6>
            </li>
            <li className="list-group-item">
              <h6>
                Type of Location : <em>{locData.type}</em>
              </h6>
            </li>
            <li className="list-group-item">
              <h6>
                Location Dimension : <em>{locData.dimension}</em>
              </h6>
            </li>
            <li className="list-group-item">
              <h6>
                Number of Residents : <em>{residents?.length}</em>
              </h6>
            </li>
            <li className="list-group-item">
              <h6>
                Featured in Total Episodes : <em>{epiData.length}</em>
              </h6>
            </li>
          </ul>
        </div>
        <div class="col">
          <div
            className={`${styles.episode_container} container-fluid fixed-left d-flex justify-content-center`}
          >
            <div className="row">
              <div className="fixed">
                <h4 className="text-white mt-2">Featured in Episodes</h4>
              </div>
              <div className="d-flex flex-column justify-content-center">
                {(() => {
                  if (epiData) {
                    episodes = epiData.map((epi) => {
                      return (
                        <div key={epi.id} className="card m-1">
                          <div className="card-body">
                            <h5 className="card-title">{epi.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                              {epi.episode}
                            </h6>
                            <p className="card-text">
                              Aired On : {epi.air_date}
                            </p>
                          </div>
                        </div>
                      );
                    });
                    return episodes;
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center my-3">
          <Link to="/">
            <button className={`${styles.btn} btn btn-primary`}> Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
