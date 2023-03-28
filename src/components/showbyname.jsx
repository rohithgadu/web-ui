
import React, { useState } from 'react';
import Axios from '../config/axios';

const Showbyname = () => {
    const [data, setData] = useState()
    const [name, setName] = useState(null)
    const ShowRequest = async () => {
        setData()
        const resp = await Axios.get(`getServer/byName/${name}`)
        console.log(resp.data)
        setData(resp.data)
    }
    return (
        <div>
            <h1>Show by Name</h1>
            <input placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
            <button type='Submit' onClick={ShowRequest} disabled={name ? false : true } >Get Data by Name</button>
            <div className="container">'
                <div className='display-content-section'>
                    { data ? 
                        <pre>{JSON.stringify(data, null, 2)}</pre> : 
                      "Server Object Not Found by the given name"
                    }
                </div>
            </div>
        </div>
    )
}

export default Showbyname