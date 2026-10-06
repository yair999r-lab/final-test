import type { MapAlert } from "./AlertsMap"
import "./ShowAlert.css"

interface Alerts {
    alerts: MapAlert[]
}

const ShowAlert = ({alerts} : Alerts) => {
  return (
    <div className="cards">
    <div className="card">{alerts.map((a, i)=> (<li key={i}>
        <p className="data">name: {a.displayName}</p>
        <p className="data">description: {a.description}</p>
        <p className="data">priority: {a.priority}</p>
        <p className="data">arena: {a.arena}</p>
        <p className="data">status: {a.status}</p>
        <p className="data">lon: {a.lon}</p>
        <p className="data">lat: {a.lat}</p>
    </li>))}</div>
    </div>
  )
}

export default ShowAlert