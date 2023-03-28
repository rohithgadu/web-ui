import React, { useState } from 'react';
import Axios from '../config/axios';

const Delete = () => {
    const [data, setData] = useState()
    const [dataId, setId] = useState(null)

    const DeleteData = async () => {
        setData()
        const resp = await Axios.delete(`/deleteServer/${dataId}`)
        console.log(resp.data)
        setData(resp.data)
    }

    return (
        <div>
            <h1>Delete</h1>
            <input placeholder='Enter Id' value={dataId} onChange={(e) => setId(e.target.value)} />
            <button type='Submit' onClick={DeleteData} disabled={dataId ? false : true} >Delete Data</button>
            <div className='container'>
                {data ?
                    <pre>{JSON.stringify(data, null, 2)}</pre> :
                    "Unable to delete record, Server Object Not Found by the given id"
                }
            </div>
        </div>
    )
}

export default Delete;