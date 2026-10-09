import { insertMessages } from "../db/queries.js";

function getNewForm(req,res) {
    res.render("form");
}
const added = new Date();
async function postNewForm(req,res) {
    const {user,text,details} = req.body;
    await insertMessages({user,text,added,details});
    res.redirect("/");
}

export {getNewForm,postNewForm};