import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
    let { id } = useParams()
    let api = `https://rickandmortyapi.com/api/character/${id}`;



    let [fetchedData, setFetchedData] = useState([]);
    let [locationVal, setLocationVal] = useState([]);



    let { name, status, species, gender, origin, image, location} = fetchedData
    let locURL = location?.url;



    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json());
            setFetchedData(data);
        })();
    }, [api])

    useEffect(() => {
        (async function () {
            let locVal = await fetch(locURL).then(res => res.json());
            setLocationVal(locVal);
        })();
    }, [locURL])

    return (
        <div className='container d-flex justify-content-center'>
        <div className="card" style={{width: 25 + 'rem'}}>
        <img src={image} className="card-img-top" alt={name}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{species} - {gender} - {status}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Origin : <em>{origin?.name}</em></li>
          <li className="list-group-item">Last Known Location : <em>{location?.name}</em></li>
          <li className="list-group-item">Type of Location : <em>{locationVal.type}</em></li>
          <li className="list-group-item">Location Dimension : <em>{locationVal.dimension}</em></li>
          {/* <li className="list-group-item">Location Dimension : <em>{locationVal.residents.length}</em></li> */}
        </ul>
        <div className="card-body">
          <Link to="/" className="card-link">Back</Link>
        </div>
      </div>
      </div>
    )
}

export default ProfilePage