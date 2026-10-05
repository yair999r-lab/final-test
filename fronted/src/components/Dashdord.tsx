import React, { useEffect, useState } from 'react'
import AlertsMap, { type MapAlert } from './AlertsMap'
import ShowAlert from './ShowAlert'
import "./Dashbord.css"
 


const Dashdord = () => {
    const [loading, setLoading] = useState<string | null>(null)
    const [search, setSearch] = useState<string>("")
    const [alerts, setAlerts] = useState<MapAlert[] >()
    const [filterData, setFilterData] = useState<MapAlert[] >()
    const [url, setUrl] = useState<string>("http://localhost:3000/api/alerts")
    const [id, setId] = useState<string>("")
    
    useEffect(() => {
        async function getAlerts() {
            try {
                setLoading("loading...")
                const result = await fetch(url, {method: "GET"})
                setLoading(null)
                if(result.ok){
                    const data = await result.json()
                    setAlerts(data.data)
                    setFilterData(data.data)
                }
                else {
                    console.log(result)
                }
            } catch (error) {
                console.log(error)
            }

        } getAlerts()
    }, [url])

    function filterByName (e: React.FormEvent){
            e.preventDefault()
            setFilterData(alerts?.filter((a) => a.displayName === search))
    }

    function filterByPriority(e: React.FormEvent){
        e.preventDefault()
        setFilterData(alerts?.filter((a) => a.priority === search))
    }
    console.log(url)
    if(loading) return (<p>{loading}</p>)
        if(filterData?.length === 0) return (<p>no alert found</p>)
        if(alerts && filterData) {
            return (
    <div className='dashbord'>
        <form onSubmit={filterByName}>
        <label>search by name <input type="text" onChange={(e) => setSearch(e.target.value)} /></label>
            <button type='submit'>send</button>
        </form>

        <form onSubmit={filterByPriority}>
        <label>filter by priority <input type="text"  onChange={(e) => setSearch(e.target.value)}/></label>
            <button type='submit'>send</button>
        </form>
            
         <form onSubmit={(e) => {e.preventDefault(), setUrl(url + "/" + id)}}>
            <label>get aleart by id <input type="text" required onChange={(e) => {setId(e.target.value)}}/></label>
                <button type='submit'>send</button>
            </form>   

        <button onClick={() => {setFilterData(alerts)}}>restart filter</button>

        <AlertsMap alerts={filterData} className='alerts' ></AlertsMap>
        <ShowAlert alerts={filterData}/>
        </div>
  )}
}

export default Dashdord