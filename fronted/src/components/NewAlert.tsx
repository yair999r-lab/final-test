import React, { useState } from 'react'
import "./form.css"

export interface Alert {
    displayName: string;
    description: string;
    priority: string;
    arena: string;
    status: string;
    lon: number;
    lat: number
}

export interface Respose {
    success: boolean;
    alert: Alert;
    alertId: string
    message?: string
}

const NewAlert = () => {
    const [displayName, setDisplayName] = useState<string>("")
    const [description, setDescription] =useState<string>("")
    const [priority, setPriority] = useState<string>("Low")
    const [arena, setArena] = useState<string>("North")
    const [status, setStatus] = useState<string>("Active")
    const [lon, setLon] = useState<string>("")
    const [lat, setLat] = useState<string>("")

    const [newAlert, setNewAlert] = useState<string>("")
    
    async function sendAlert(e: React.FormEvent){
        e.preventDefault()
        const token = localStorage.getItem("token")
        try {
            const result = await fetch("http://localhost:3000/api/alerts", {method: "POST", headers: {"Content-Type": "application/json", authorization: `Bearer ${token}`}, body: JSON.stringify({displayName,description, priority, arena, status, lon, lat})})

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
    <div className='form'>
        {newAlert && <p>new alert id: {newAlert}</p>}
        <form onSubmit={sendAlert} >
            <label >displayName
                <input type="text" value={displayName} required onChange={(e) => {setDisplayName(e.target.value)}}/>
            </label>
            <label>description
                <input type="text" value={description} required onChange={(e) => {setDescription( e.target.value)}} />
            </label>
            <label >priority
                <select value={priority}  onChange={(e) => {setPriority(e.target.value)}} name="priority" id="priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Critical">Critical</option>
                </select>
                {/* <input type="text" value={priority} required onChange={(e) => {setPriority(e.target.value)}}/> */}
            </label>
            <label >arena
                <select value={arena} name="arena" id="arena" onChange={(e) => {setArena(e.target.value)}}>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="Center">Center</option>
                </select>
                {/* <input type="text" value={arena} required onChange={(e) => setArena(e.target.value)}/> */}
            </label>
            <label >status

                <select value={status} name="status" id="status" onChange={(e) => {setStatus(e.target.value)}}>
                    <option value="Active">Active</option>
                    <option value="Handled">Handled</option>
                </select>
                {/* <input type="text" value={status} required onChange={(e) => setStatus(e.target.value)}/> */}
            </label>
            <label >lon
                <input type="text" value={lon} required onChange={(e) => setLon(e.target.value)}/>
            </label>
            <label >lat
                <input type="text" value={lat} required onChange={(e) => setLat(e.target.value)}/>
            </label>
            <button type='submit'>send alert</button>
        </form>
    </div>
  )
}

export default NewAlert