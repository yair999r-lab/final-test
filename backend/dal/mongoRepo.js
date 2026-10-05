import { myDb } from "./Db.js";

function basicRepo(db){
    async function insertData(data) {
        const result = await db.collection("alerts").insertOne(data)
        return result.insertedId
    }

    async function updateData(id, upData) {
        const result = await db.collection("alerts").updateOne({_id: id}, {$set: {upData}})
        return result
    }

    async function deleteData(id) {
        console.log(id)
        const result = await db.collection("alerts").deleteOne({_id: id})
        return result
    }

    return {insertData, updateData, deleteData}
}

export const myRepo = basicRepo(myDb)