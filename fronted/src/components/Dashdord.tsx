import React, { useEffect, useState } from 'react'
import AlertsMap, { type MapAlert } from './AlertsMap'
// import { useAlertsStore } from '../store/useAlertsStore'
import ShowAlert from './ShowAlert'
 


const Dashdord = () => {
    // const alerts = useAlertsStore((state) => state.alerts)
    // const setAlerts = useAlertsStore((state) => state.addAlerts)
    const [loading, setLoading] = useState<string | null>(null)
    const [search, setSearch] = useState<string>("")
    const [alerts, setAlerts] = useState<MapAlert[] >()
    const [filterData, setFilterData] = useState<MapAlert[] >()
    
    useEffect(() => {
        async function getAlerts() {
            try {
                setLoading("loading...")
                const result = await fetch("http://localhost:3000/api/alerts", {method: "GET"})
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
    }, [])

    function filter (e: React.FormEvent){
            e.preventDefault()
            setFilterData(alerts?.filter((a) => a.displayName === search))
    }
    if(loading) return (<p>{loading}</p>)
        if(alerts && filterData) {
            return (
    <div>
        <form onSubmit={filter}>
        <label>search by name <input type="text" onChange={(e) => setSearch(e.target.value)} /></label>
                <button type='submit'>send</button>
        </form>
        {/* <label>filter by priority <input type="text"  onChange={(e) => setSearch(e.target.value)}/></label> */}
        {/* <label >Search by name
            <input type="text" onChange={(e) => setFilterData(alerts.filter((a) => a.displayName === e.target.value))} />
        </label>
        <label >Search by status
            <input type="text" onChange={(e) => setFilterData(alerts.filter((a) => a.status === e.target.value))} />
        </label>
        <label >Search by priority
            <input type="text" onChange={(e) => setFilterData(alerts.filter((a) => a.priority === e.target.value))} />
        </label> */}

        <AlertsMap alerts={filterData} className='alerts' ></AlertsMap>
        <ShowAlert alerts={filterData}/>
        </div>
  )}
}

export default Dashdord