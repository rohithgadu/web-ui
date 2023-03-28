
import React, { useState } from 'react';
import Axios from '../config/axios';
import Card from './shared/card';

const ShowByID = () => {
    const [data, setData] = useState()
    const [dataId, setId] = useState(null)
    const [success, setSuccess] = useState(true)

    const ShowRequest = async () => {
        setData()
        setSuccess(false)
        const resp = await Axios.get(`/getServer/byId/${dataId}`)
        setData(resp.data)
        setSuccess(resp.data.success)
    }
    return (
        <div>
            <h1>Show by Id</h1>
            <input placeholder='Enter Id' value={dataId} onChange={(e) => setId(e.target.value)} />
            <button type='Submit' onClick={ShowRequest} disabled={dataId ? false : true} >Get Data by Id</button>

            <div className="container">
                {data ?
                    <Card id={data.data.id} name={data.data.name} language={data.data.language} framework={data.data.framework} /> :
                    <>
                        { success ? "" : "Server Object Not Found by the given id"}
                    </>
                }
            </div>
        </div>
    )
}

export default ShowByID;