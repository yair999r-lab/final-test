import  { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface user {
    _id: string,
    userName: string,
    password: string,
    email: string,
    role: string,
    assignedArena: string
}

interface Resposne {
    success: boolean,
    message?: string,
    data: user[]
}

interface DelRes {
    success: boolean,
    message? : string,
    data: string | {}
}

export const AdminPage = () => {
    const [users, setUsers] = useState<user[]>()
    const [loading, setLoading] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [deleteUsers, setDeletUser] = useState<string>("")

    useEffect(() => {
        async function getUsers() {
            setLoading("loading...")
            setError("")
            
            const token = localStorage.getItem("token")

            try {
                const result = await fetch("http://localhost:3000/api/auth/all", {method: "GET", headers: {"Content-Type": "application/json", authorization: `Bearer ${token}`}})
                const data = await result.json() as Resposne

                if(result.ok){
                    setUsers(data.data)
                }else{
                    setError(`${data.message}`)
                }
            } catch (error) {
                console.log(error)
            }
            finally{
                setLoading("")

            }
        } getUsers()
    }, [deleteUsers])

    async function deleteUser(id: string) {
        try {
            setLoading("loading...")
            const token = localStorage.getItem("token")

            const result = await fetch(`http://localhost:3000/api/auth/users/${id}`, {method: "DELETE", headers: {"Content-Type": "application/json", authorization: `Bearer ${token}`}})

            const data = await result.json() as DelRes
            if(result.ok){
                setDeletUser("user delete")
            }else{
                setError(`${data.message}`)
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
         {loading && <p>{loading}</p>}
        {error && <p>{error}</p>}

        {users && <div>{users.map((u, i) => (<li key={i}>
            <p>user: {u.userName}</p>
            <p>id: {u._id}</p>
            <p>password: {u.password}</p>
            <p>assigned arena: {u.assignedArena}</p>
            <p>role: {u.role}</p>
            <p>email: {u.email}</p>
            <button onClick={() => deleteUser(u._id)}>delete user</button>
        </li>))}</div>}
    </div>
  )
}
