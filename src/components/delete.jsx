import React, { useState } from 'react';
import Axios from '../config/axios';
import Card from './shared/card';

const Delete = () => {
    const [data, setData] = useState()
    const [dataId, setId] = useState(null)
    const [success, setSuccess] = useState(true)

    const DeleteData = async () => {
        setSuccess(false)
        setData()
        const resp = await Axios.delete(`/deleteServer/${dataId}`)
        setData(resp.data)
        setSuccess(resp.data.success)
    }

    return (
        <div>
            <h1>Delete</h1>
            <input placeholder='Enter Id'  type="number" value={dataId} onChange={(e) => setId(e.target.value)} />
            <button type='Submit' onClick={DeleteData} disabled={dataId ? false : true} >Delete Data</button>
            <div className='container'>
                {data ?
                    data.data :
                    <>
                        { success ? "" : "Unable to delete record, Server Object Not Found by the given id"}
                    </>
                }
            </div>
        </div>
    )
}

export default Delete;