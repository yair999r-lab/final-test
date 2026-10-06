import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

interface Respose {
    success: boolean,
    message?: string,
    token : string,
    data: {user: string, role: string}
}

const Login = () => {
    const [id, setId] = useState<string>("")
    const [password, setPassword ] = useState<string>("")
    const navigate = useNavigate()

    async function handelSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            const result = await fetch("http://localhost:3000/api/auth/login", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({password, id})})
            const data = await result.json() as Respose
            if(result.ok){
                localStorage.setItem("token", data?.token)
                localStorage.setItem("user", JSON.stringify(data.data))
                navigate("/Dashdord")
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
        <form onSubmit={handelSubmit}>
            <label>enter id: <input type="text" required value={id} onChange={(e) => {setId(e.target.value)}} /></label>
            <label>enter password: <input type="password" required value={password} onChange={(e) => {setPassword(e.target.value)}} /></label>
            <button type="submit">send</button>
        </form>
    </div>
  )
}

export default Login