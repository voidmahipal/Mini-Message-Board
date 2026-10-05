import { messages } from "../models/messages.js";

function getIndexContent(req,res) {
    res.render("index",{ title: "Mini Messageboard" ,messages:messages});
}

export {getIndexContent};