import React from 'react';
import styles from './Search.module.scss';

const Search = ({setSearch, setPageNumber}) => {
  let inputVal = "";
  return <form className={`${styles.form} d-flex justify-content-end mb-2`}>

{/* Taking user input */}

      <input 
      placeholder="Search For Characters" 
      type="text" 
      className={`${styles.input} flex-grow-1 p-2`} 
      onChange={(e) => {
      inputVal=e.target.value
    }}
      />
      <button type="button" 
      className={`${styles.btn} btn btn-primary fs-5`} 
      onClick={()=>{setPageNumber(1);
          setSearch(inputVal)}}>
            Search
          </button>
    </form>
    
}

export default Search