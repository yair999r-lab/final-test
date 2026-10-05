import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI)

async function getConection() {
    await client.connect()
    return client.db("alerts")
}

export const myDb = await getConection()