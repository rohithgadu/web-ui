import React, { useState } from 'react';
import Axios from '../config/axios';

const Create = () => {
    const [data, setData] = useState()
    const [dataId, setId] = useState(null)
    const [name, setName] = useState("")
    const [language, setLanguage] = useState("")
    const [framework, setFrameWork] = useState("")

    const CreateRequest = async () => {
        setData()
        const resp = await Axios.put('/addServer', {
            id: dataId,
            name: name,
            language: language,
            framework: framework
        })
        setData(resp.data)
    }

    return (
        <div>
            <h1>Create</h1>
            <input type="number" placeholder='id' value={dataId} onChange={(e) => setId(e.target.value)} />
            <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='language' value={language} onChange={(e) => setLanguage(e.target.value)} />
            <input type="text" placeholder='framework' value={framework} onChange={(e) => setFrameWork(e.target.value)} />
            <button onClick={CreateRequest}>Create Data</button>
            <div className="container">
                {data ?
                    <pre>{JSON.stringify(data, null, 2)}</pre> :
                    ""
                }
            </div>
        </div>
    )
}

export default Create