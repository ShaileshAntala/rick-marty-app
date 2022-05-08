import React from "react";
import Search from "../Search/Search";
import Gender from "./Categories/Gender";
import Species from "./Categories/Species";
import Status from "./Categories/Status";
import styles from "./Filters.module.scss";

// defining filters passing on props and clearing it up

const Filters = ({
  setStatus,
  setPageNumber,
  setGender,
  setSpecies,
  setSearch,
}) => {
  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    setSearch("");
    window.location.reload(false);
  };
  return (
    <div>
      <div className={`${styles.container} container fixed-left`}>
        <div className="fs-4 mt-5 text-center text-white">Filters Menu</div>
        <div
          className={`${styles.clearfilter} text-center text-decoration-underline mb-3`}
          onClick={clear}
        >
          {" "}
          Clear Filters{" "}
        </div>
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
        <div className="accordion" id="accordionExample">
          <Status setStatus={setStatus} setPageNumber={setPageNumber} />
          <Gender setGender={setGender} setPageNumber={setPageNumber} />
          <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
