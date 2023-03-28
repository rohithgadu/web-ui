
import React, { useState } from 'react';
import Axios from '../config/axios';
import Card from './shared/card';

const Show = () => {
    const [data, setData] = useState([])
    const [success, setSuccess] = useState(true)

    const ShowRequest = async () => {
        setData()
        setSuccess(false)
        const resp = await Axios.get("/getServer")
        setData(resp.data.data)
        setSuccess(resp.data.success)
    }

    return (
        <div>
            <h1>Show</h1>
            <button onClick={ShowRequest}>Get Data</button>
            <div className="container">
                {data ?
                    <div>
                        {data.map((obj) => <Card id={obj.id} name={obj.name} language={obj.language} framework={obj.framework} />)}
                    </div>
                    :
                    <>
                        { success ? "" : "Data is not found."}
                    </>
                }
            </div>
        </div>
    )
}

export default Show;