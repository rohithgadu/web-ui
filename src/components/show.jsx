
import React, { useState } from 'react';
import Axios from '../config/axios';

const Show = () => {
    const [data, setData] = useState()
    const ShowRequest = async () => {
        setData()
        const resp = await Axios.get("/getServer")
        console.log(resp.data)
        setData(resp.data)
    }
    return (
        <div>
            <h1>Show</h1>
            <button onClick={ShowRequest}>Get Data</button>
            <div className="container">
                {data ?
                    <pre>{JSON.stringify(data, null, 2)}</pre> :
                    ""
                }
            </div>
        </div>
    )
}

export default Show;