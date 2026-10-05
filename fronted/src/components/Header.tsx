import { NavLink, Outlet } from "react-router-dom"
import Footer from "./Footer"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
        <NavLink className={"nev-but"} to="/NewAlert">add new alerts</NavLink>
        <NavLink className={"nev-but"} to="/UpdateAlert">update alerts</NavLink>
        <NavLink className={"nev-but"} to="/Dashdord">show alerts</NavLink>
        <NavLink className={"nev-but"} to="/DeleteAlert">delete alerts</NavLink>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Header