import { messages } from "../models/messages.js";

function getNewForm(req,res) {
    res.render("form");
}

function postNewForm(req,res) {
    const {user,text} = req.body;
    messages.push({user:user,text:text,added:new Date()});
    res.redirect("/");
}

export {getNewForm,postNewForm};