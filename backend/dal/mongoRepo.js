import { myDb } from "./Db.js";

function basicRepo(db){
    async function insertData(data) {
        const result = await db.collection("alerts").insertOne(data)
        return result.insertedId
    }


    return {insertData}
}

export const myRepo = basicRepo(myDb)