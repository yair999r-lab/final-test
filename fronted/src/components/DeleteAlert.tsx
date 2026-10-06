import React, { useState } from "react"

const DeleteAlert = () => {
    const [alertId, setAlertId] = useState<string>("")
    const [loading, setLoading] = useState<string>("")
    const [success, setSuccess] = useState<string>("")

    async function deleteAleart(e: React.FormEvent){
        e.preventDefault()

        try {
            setLoading("loading...")
            const token = localStorage.getItem("token")
            const result = await fetch("http://localhost:3000/api/alerts/" + alertId, {method: "DELETE", headers: {authorization: `Bearer ${token}`}})
            if(result.ok){
                setLoading("")
                setSuccess("alert delete!!!")
                }
                else {
                    console.log(result)
                }
        } catch (error) {
            console.log(error)
        }
    }

  
  return (
    <div>
        {loading && <p>{loading}</p>}
        {success && <p>{success}</p>}
        <form onSubmit={deleteAleart}>
            <input type="text" required onChange={(e) => {setAlertId(e.target.value)}} />
            <button type="submit">delete</button>
        </form>
    </div>
  )
}

export default DeleteAlert