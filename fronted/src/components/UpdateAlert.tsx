import  { useState } from 'react'

interface Respose {
     success: boolean;
     alertId: string
        message?: string
}

const UpdateAlert = () => {
        const [displayName, setDisplayName] = useState<string>("")
        const [description, setDescription] =useState<string>("")
        const [priority, setPriority] = useState<string>("")
        const [arena, setArena] = useState<string>("")
        const [status, setStatus] = useState<string>("")
        const [lon, setLon] = useState<string>("")
        const [lat, setLat] = useState<string>("")
        const [alertId, setAlertId] = useState<string>("")
        
      
         const [UpdateAlert, setNewAlert] = useState<string>("")
            
            async function sendAlert(e: React.FormEvent){
                e.preventDefault()
                setNewAlert("")

                try {
                    const result = await fetch(`http://localhost:3000/api/alerts/${alertId}`, {method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify({displayName})})
        
                    const data = await result.json() as Respose
                    if(result.ok){
                        setNewAlert(data.alertId)
                    }
                    else{
                        <p>{data.message}</p>
                    }
                } catch (error) {
                    console.log(error)
                }
            }

  return (
    <div>
        {UpdateAlert && <p>alert update!!!</p>}
        <form onSubmit={sendAlert}>
            <label>aleart id <input type="text" required value={alertId} onChange={(e) => {setAlertId(e.target.value)}}/></label>
       <label >displayName
                <input type="text" value={displayName}  onChange={(e) => {setDisplayName(e.target.value)}}/>
            </label>
            <label>description
                <input type="text" value={description}  onChange={(e) => {setDescription( e.target.value)}} />
            </label>
            <label>priority <input type="text" value={priority}  onChange={(e) => {setPriority(e.target.value)}}/>
</label>
        <label > arena <input type="text" value={arena}  onChange={(e) => setArena(e.target.value)}/>
</label>
        <label > status<input type="text" value={status}  onChange={(e) => setStatus(e.target.value)}/>
</label>
        <label >lon<input type="text" value={lon}  onChange={(e) => setLon(e.target.value)}/>
</label>
        <label > lat  <input type="text" value={lat}  onChange={(e) => setLat(e.target.value)}/>
</label>
        <button type='submit'>send</button>
        </form></div>
  )
}

export default UpdateAlert