import  { useEffect, useMemo, useState } from 'react'
import AlertsMap, { type MapAlert } from './AlertsMap'
import ShowAlert from './ShowAlert'
import "./Dashbord.css"
 
// interface User {
//     role: "arenaUser" | "generalUser" | "admin",
//     assignedArena: "North" | "South" | "Center",
//     user: string
// }



const Dashdord = () => {
    const [loading, setLoading] = useState<string | null>(null)
    const [search, setSearch] = useState<string>("")
    const [alerts, setAlerts] = useState<MapAlert[]>()
    const [filterData, setFilterData] = useState<MapAlert[]>()
    const [url, setUrl] = useState<string>("http://localhost:3000/api/alerts")
    const [id, setId] = useState<string>("")
    const [filter, setFilter] = useState<string>("")
    const [emergency, setEmergency] = useState<MapAlert[]>()
    const [empty, setEmpty] = useState<string>("")
    
    useMemo(() => setFilterData(alerts?.filter((a) => a.displayName.includes(search))), [search])
    useMemo(() => setFilterData(alerts?.filter((a) => a.priority.includes(filter))), [filter])
    


    useEffect(() => {
        async function getAlerts() {
            try {
                setLoading("loading...")
                const token = localStorage.getItem("token")
            
                const result = await fetch(url, {method: "GET", headers: {authorization: `Bearer ${token}`}})
                setLoading(null)
                if(result.ok){
                    const data = await result.json()
                    setAlerts(data.data)
                    setFilterData(data.data)
                }
                else {
                    console.log(result)
                    setAlerts([])
                }
            } catch (error) {
                console.log(error)
            }

        } getAlerts()
        
        
    }, [url])



    useEffect(() => {
        filterAlert()
        // const cretical = alerts?.filter((a) => a.priority === "Critical" && a.status === "Active")
        // if(cretical){
        //     for(let i = 0; i ++; i <= (cretical.length -2)){
        //         let x = i + 2
        //         while (x <= cretical.length){
        //             if(cretical[i].arena === cretical[i+1].arena){break}
        //             if((cretical[i + 1].CreateAt - cretical[i].CreateAt) <= 15000 && cretical[i].arena !== cretical[i + 1].arena){
        //                 if((cretical[x].CreateAt - cretical[i].CreateAt) <= 15000){
        //                     if(cretical[i].arena === cretical[x].arena){break}
        //                     if(cretical[i + 1].arena === cretical[x].arena){
        //                         x + 1
        //                     }
        //                     else( cretical[i].CreateAt)
        //                 }
        //             }
        //         }
        //     }
            
        // }
    }, [alerts])

    function filterAlert(){
        const userData = localStorage.getItem("user")
        if(userData){
            const user = JSON.parse(userData)
            if(user.role === 'arenaUser'){
                if(user.assignedArena !== "All"){
                    setFilterData(alerts?.filter((a) => a.arena === user.assignedArena))}
                    }
        }
    }
    
    if(loading) return (<p>{loading}</p>)
        
    
        if(alerts && filterData) {
            return (
    <div className='dashbord'>
        {/* {emergency && <>
         <h2>Emergency!!!</h2>
         <div>
            {emergency.map((a, i) => (<li key={i}>
                <p>locaticon: lat: {a.lat} - lot: {a.lon}</p>
                <p>arena: {a.arena}</p>
                <p>description: {a.description}</p>
            </li>))}
         </div>
        </>
         } */}
        <input placeholder='search by name' type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <select value={filter} name="priority" id="priority" onChange={(e) => {setFilter(e.target.value)}}>
            <option defaultValue={""} >search by priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
        </select>
        {filterData?.length === 0&& <p>no alert found</p>}

         <form onSubmit={(e) => {e.preventDefault(), setUrl("http://localhost:3000/api/alerts" + "/" + id)}}>
            <label>get aleart by id <input type="text" required onChange={(e) => {setId(e.target.value)}}/></label>
                <button type='submit'>send</button>
            </form>   

        <button onClick={(e) => {e.preventDefault(), setUrl("http://localhost:3000/api/alerts")}}>restart filter</button>

        <AlertsMap alerts={filterData} className='alerts' ></AlertsMap>
        <ShowAlert alerts={filterData}/>
        </div>
  )}
}

export default Dashdord