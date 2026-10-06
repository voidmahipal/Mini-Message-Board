import { messages } from "../models/messages.js";

let mId = 3;
function getNewForm(req,res) {
    res.render("form");
}

function postNewForm(req,res) {
    const {user,text,details} = req.body;
    messages.push({user:user,text:text,added:new Date(),id:mId,details:details});
    mId++;
    res.redirect("/");
}

export {getNewForm,postNewForm};