import React, { useState } from "react"

interface Response {
    success: boolean,
    userName: string, 
    newUserId: string,
    message? : string
}


const RegisterPage = () => {    


    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [role, setRole] = useState<string>("arenaUser")
    const [assignedArena, setAssignedArena] = useState<string>("All")

    const [loading, setLoading] = useState<string>("")
    const [data, setData] = useState<string>("")
    const [error, setError] = useState<string>("")

    async function HandleForm(e: React.FormEvent){
        e.preventDefault()
        setError("")
        setData("")
        setLoading("loding...")
        const token = localStorage.getItem("token")
        try {
            const result = await fetch("http://localhost:3000/api/auth/register", {method: "POST", headers: {"Content-Type": "application/json", authorization: `Bearer ${token}`}, body: JSON.stringify({password, userName, email, role, assignedArena})})
            setLoading("")
            const data = await result.json() as Response
            if(result.ok){
                setData(`user crate: user name ${data.userName} - user id: ${data.newUserId}`)
            }else{
                setError(`error: ${data.message}`)
            }
        } catch (error) {
            setLoading("")
            console.log(error)
        }
    }

  return (
    <div>
        {loading && <p>{loading}</p>}
        {data && <p>{data}</p>}
        {error && <p>{error}</p>}

        <form onSubmit={HandleForm}>
        <label>user name<input type="text" required value={userName} onChange={(e) => {setUserName(e.target.value)}}/></label>
        <label>password<input type="text" required value={password} onChange={(e) => {setPassword(e.target.value)}}/></label>
        <label>email<input type="text" required value={email} onChange={(e) => {setEmail(e.target.value)}}/></label>

        <label>role<select value={role} name="role" id="role" onChange={(e) => {setRole(e.target.value)}}>
            <option value="arenaUser">arena_user </option>
            <option value="generalUser">general_user </option>
            <option value="admin">admin</option>
            </select></label>

        <label>assigned arena 
            <select value={assignedArena} name="assignedArena" id="assignedArena" onChange={(e) => {setAssignedArena(e.target.value)}}>
                <option value="All">All</option>
                <option value="Center">Center </option>
                <option value="South">South </option>
                <option value="North">North </option>
            </select>
        </label>
        <button type="submit">send</button>
        </form>
    </div>
  )
}

export default RegisterPage