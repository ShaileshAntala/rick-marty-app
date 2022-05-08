import React from "react";

// reusable filter button in fixed sidebar for all filters

const FilterButton = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
      <style jsx="true">
        {`
          .input:checked + label {
            background-color: rgb(130, 6, 202);
            color: white;
          }

          .label {
            width: 80%;
            border: none;
          }

          .label:hover {
            background-color: rgb(255, 78, 225);
          }

          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          className="form-check-input input"
          type="radio"
          name={name}
          id={`${name}${index}`}
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
        />
        <label
          className="btn btn-outline-primary label"
          htmlFor={`${name}${index}`}
        >
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
