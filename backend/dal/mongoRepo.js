import { myDb } from "./Db.js";

function basicRepo(db){
    async function insertData(data) {
        const result = await db.collection("alerts").insertOne(data)
        return result.insertedId
    }

    async function updateData(id, upData) {
        const result = await db.collection("alerts").updateOne({_id: id}, {$set: {...upData}})
        return result
    }

    async function deleteData(id) {
        const result = await db.collection("alerts").deleteOne({_id: id})
        return result
    }

    async function findData(filter = {}) {
        const result = await db.collection("alerts").find(filter).toArray()
        return result
    }

    return {insertData, updateData, deleteData, findData}
}

export const myRepo = basicRepo(myDb)