import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Create from '../components/create';
import Delete from '../components/delete';
import Show from '../components/show';
import ShowByID from '../components/showbyId';
import Showbyname from '../components/showbyname';
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
        <button onClick={goToCreate}>/addServer</button>
        <button onClick={goToShow}>/getServer</button>
        <button onClick={goToDelete}>/deleteServer</button>
        <button onClick={goToById}>/getServer/byId/id</button>
        <button onClick={getToName}>getServer/byName/name</button>

      </div>
    
    <Routes>
      <Route path='create' Component={Create} />
      <Route path='delete' Component={Delete} />
      <Route path='show' Component={Show} />
      <Route path='showbyId' Component={ShowByID} />
      <Route path='byname' Component={Showbyname} />
    </Routes>
    </div>
  )
}

export default Home