import { Client } from "pg";
import "dotenv/config";

const date = new Date();

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString:process.env.DB_URL,
        ssl:{rejectUnauthorized:false},
    })
    try{
        await client.connect();
        await client.query(`CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,"user" VARCHAR(255),text VARCHAR(255),added TIMESTAMPTZ,details VARCHAR(255))`);
        await client.query(`INSERT INTO messages("user",text,added,details) VALUES ($1,$2,$3,$4),($5,$6,$7,$8);`,['Amando','Hi there!!',date,'Details 1','Charles','Hello World!!',date,'Details 2']);
        console.log("Done");
    }finally{
        await client.end();
    }
}
main().catch(console.error);