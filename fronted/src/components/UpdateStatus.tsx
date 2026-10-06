import React, { useState } from 'react'

import type { UpdateRespose } from './UpdateAlert'

const UpdateStatus = () => {
    const [status, setStatus] = useState<string>("Active")
    const [alertId, setId] = useState<string>("")
    const [NewAlert, setNewAlert] = useState<string>("")

    async function handelForm(e: React.FormEvent) {
        e.preventDefault()
        setNewAlert("")
        const token = localStorage.getItem("token")
       try {
        const result = await fetch(`http://localhost:3000/api/alerts/${alertId}`, {method: "PUT", headers: {"Content-Type": "application/json", authorization: `Bearer ${token}`}, body: JSON.stringify({status})})

        const data = await result.json() as UpdateRespose
        if(result.ok){
            setNewAlert(data.alertId)
        }
        else{
            <p>{data.message}</p>
        }
    } catch (error) {
        console.log(error)
    }}
  return (
    <div>
        {NewAlert && <p>status chenge</p>}
        <form onSubmit={handelForm}>
        <label>alert id
        <input type="text" required value={alertId} onChange={(e) => {setId(e.target.value)}}/>
        </label>
        <select value={status} name="status" id="status" onChange={(e) => {setStatus(e.target.value)}}>
            <option value="Handled">Handled</option>
            <option value="Active">Active</option>
            </select>
            <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default UpdateStatus