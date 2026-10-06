import { myDb } from "./Db.js";

function basicRepo(db){
    async function insertData(data, collection) {
        const result = await db.collection(collection).insertOne(data)
        return result.insertedId
    }

    async function updateData(id, upData,collection) {
        const result = await db.collection(collection).updateOne({_id: id}, {$set: {...upData}})
        return result
    }

    async function deleteData(id, collection) {
        const result = await db.collection(collection).deleteOne({_id: id})
        return result
    }

    async function findData(filter = {},collection) {
        const result = await db.collection(collection).find(filter).toArray()
        return result
    }

    return {insertData, updateData, deleteData, findData}
}

export const myRepo = basicRepo(myDb)