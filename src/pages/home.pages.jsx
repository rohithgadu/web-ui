import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ShowByName from '../components/showbyName';
import Create from '../components/create';
import Delete from '../components/delete';
import Show from '../components/show';
import ShowByID from '../components/showbyId';

import '../styles/home.styles.css'


const Home = () => {
  const navigate = useNavigate()

  const goToCreate = () => {
    navigate('/create')
  }

  const goToShow = () => {
    navigate('/show')
  }

  const goToDelete = () => {
    navigate('/delete')
  }

  const goToById = () => {
    navigate('/showbyId')
  }

  const getToName = () => {
    navigate('/byname')
  }

  return (
    <div>
      <div className='actions'>
        <button onClick={goToCreate}>Create Data</button>
        <button onClick={goToShow}>Get All Data</button>
        <button onClick={goToDelete}>Delete Object</button>
        <button onClick={goToById}>Get Data by id</button>
        <button onClick={getToName}>Get Data by name</button>

      </div>
    
    <Routes>
      <Route path='create' Component={Create} />
      <Route path='delete' Component={Delete} />
      <Route path='show' Component={Show} />
      <Route path='showbyId' Component={ShowByID} />
      <Route path='byname' Component={ShowByName} />
    </Routes>
    </div>
  )
}

export default Home