import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route}  from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import ProfilePage from "./components/Cards/ProfilePage";


// Setting up Routes/Navigation

function App(){
  return(
    <Router>
      <div className="App">   <Navbar /> </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<ProfilePage/>}/>
    </Routes>

    </Router>
  )
}


// Home page with all components and setting up State hooks and useEffect

const Home = () => {
 let [pageNumber, setPageNumber] = useState(1);
 let [fetchedData, setFetchedData] = useState([]);
 let { info, results } = fetchedData 

 let [search, setSearch] = useState("");
 let [status, setStatus] = useState("");
 let [gender, setGender] = useState("");
 let [species, setSpecies] = useState("");



 let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

 useEffect(()=>{
   (async function(){
     let data = await fetch(api).then(res=>res.json());
     setFetchedData(data);
   })();
 }, [api])  


  return (
    <div className="App">
      <div className="container-fluid">
     
        <div className="row">
          <div className="col-3">
            <Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} setSearch={setSearch}/>
          </div>
          <div className="col-8">
            <div className="row">
                <Cards page="/" results={results} />
            </div>
          </div>
        </div>

      </div>
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info}/>
    </div>
  );
}

export default App;
