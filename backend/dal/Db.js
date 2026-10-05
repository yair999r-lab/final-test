import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI)

async function getConection() {
    await client.connect()
    console.log("connect to db")
    return client.db("my-db-alerts")
}

export const myDb = await getConection()