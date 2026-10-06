import  { useEffect, } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Protected = () => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    useEffect(() => {
        if(!token) {
            navigate("/Login")
        }
    }, [token])
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Protected