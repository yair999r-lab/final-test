import { NavLink, Outlet, useNavigate } from "react-router-dom"
import Footer from "./Footer"
import "./Header.css"
import { useEffect, useState } from "react"

interface Data {
  user: string,
  role: string
}

const Header = () => {
  const [user, setUser] = useState<Data>()
  const navigate = useNavigate()
    useEffect(() => {
        const data = localStorage.getItem("user") as string
        setUser(JSON.parse(data))
    }, [])

    function loghot(){
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      navigate("/Login")
    }

  return (
    <div className="header">
        <p>user: {user?.user} - role: {user?.role}</p>
        <NavLink className={"nev-but"} to="/NewAlert">add new alerts</NavLink>
        <NavLink className={"nev-but"} to="/Dashdord">show alerts</NavLink>

        {user?.role === "generalUser" && <NavLink  className={"nev-but"} to="/UpdateStatus">update status</NavLink>}
        {user?.role === "admin" && <>
        <NavLink className={"nev-but"} to="/UpdateAlert">update alerts</NavLink>
        <NavLink className={"nev-but"} to="/DeleteAlert">delete alerts</NavLink>
        <NavLink className={"nev-but"} to="/RegisterPage">RegisterPage </NavLink>
        <NavLink className={"nev-but"} to="/AdminPage" >AdminPage </NavLink>
        </>}
        <button onClick={loghot}>Loghot</button>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Header