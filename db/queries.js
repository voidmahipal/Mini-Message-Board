import pool from "./pool.js";

async function getAllMessages() {
    const {rows} = await pool.query('SELECT * FROM messages');
    return rows;
}
async function insertMessages({user,text,added,details}) {
    await pool.query('INSERT INTO messages ("user",text,added,details) VALUES ($1,$2,$3,$4)',[user,text,added,details]);
}
async function findMessagesDetails(id) {
    const {rows} = await pool.query('SELECT "user",details FROM messages WHERE id=$1',[id]);
    return rows;
}
export {getAllMessages,insertMessages,findMessagesDetails};