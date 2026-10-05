import type { MapAlert } from "./AlertsMap"

interface Alerts {
    alerts: MapAlert[]
}

const ShowAlert = ({alerts} : Alerts) => {
  return (
    <div>{alerts.map((a, i)=> (<li key={i}>
        <p>name: {a.displayName}</p>
        <p>description: {a.description}</p>
        <p>priority: {a.priority}</p>
        <p>arena: {a.arena}</p>
        <p>status: {a.status}</p>
        <p>lon: {a.lon}</p>
        <p>lat: {a.lat}</p>
    </li>))}</div>
  )
}

export default ShowAlert