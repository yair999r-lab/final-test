// import React, { useState } from 'react'
// import { useAlertsStore } from '../store/useAlertsStore'

// const Search = () => {
//     const setAlerts = useAlertsStore((state) => state.addAlerts)
//     const [id, setId] = useState<string>("")
//     const [name, setName] = useState<string>("")
//     const [priority, setPriority] = useState<string>("")
//     const [loading, setLoading] = useState<string | null>(null)

//     console.log(id)
//     async function handelFaetch(e: React.FormEvent) {
//         e.preventDefault()
//          try {
//                 setLoading("loading...")
//                 const result = await fetch(`http://localhost:3000/api/alerts/${id}` , {method: "GET"})
//                 setLoading(null)
//                 if(result.ok){
//                     const data = await result.json()
//                     setAlerts(data.data)
//                 }
//                 else {
//                     console.log(result)
//                 }
//             } catch (error) {
//                 console.log(error)
//             }
//     }

//   return (
//     <div>
//         <form onSubmit={handelFaetch}>
//             <input type="text" onChange={(e) => {setId(e.target.value)}}/>
//             <button type='submit'>send</button>
//         </form>

//     </div>
//   )
// }

// export default Search