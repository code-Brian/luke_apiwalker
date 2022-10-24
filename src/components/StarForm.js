import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'

export const StarForm = () => {
    const [responseData, setResponseData] = useState([])

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response=>{setResponseData(response.data)})
    },[])

    console.log(responseData)
    console.log(typeof(responseData))

    const handleStarMeme = (e) => {
        // Query the API here with axios
        console.log("handleStarMeme was called")
        e.preventDefault()
    }

    return (
        <div className="mt-3">
            <form onSubmit={handleStarMeme}>
                <div>
                    <label>Search for</label>
                    <select className="mx-3 border-black rounded border-solid border p-1">
                    </select>
                    <input className="border-black border border-solid rounded p-1" type="submit" value="Search"></input>
                </div>
            </form>
            <div>
                <ul>
                {
                    responseData.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
                </ul>
            </div>
        </div>
    )
}
