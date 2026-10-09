import { getAllMessages } from "../db/queries.js";

async function getIndexContent(req,res) {
    const messages=await getAllMessages();
    res.render("index",{ title: "Mini Messageboard" ,messages:messages});
}

export {getIndexContent};