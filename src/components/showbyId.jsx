
import React, { useState } from 'react';
import Axios from '../config/axios';

const ShowByID = () => {
    const [data, setData] = useState()
    const [dataId, setId] = useState(null)
    const ShowRequest = async () => {
        setData()
        const resp = await Axios.get(`/getServer/byId/${dataId}`)
        console.log(resp.data)
        setData(resp.data)
    }
    return (
        <div>
            <h1>Show by Id</h1>
            <input placeholder='Enter Id' value={dataId} onChange={(e) => setId(e.target.value)} />
            <button type='Submit' onClick={ShowRequest} disabled={dataId ? false : true } >Get Data by Id</button>
  
            <div className="container">
                { data ? 
                        <pre>{JSON.stringify(data, null, 2)}</pre> : 
                      "Server Object Not Found by the given name"
                }
            </div>
        </div>
    )
}

export default ShowByID;