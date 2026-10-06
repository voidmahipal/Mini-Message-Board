import { messages } from "../models/messages.js";

function findMessage(id) {
    
    for(let i=0;i<messages.length;i++) {
        if(id===messages[i].id) {
            return messages[i];
        }
    }
    return null;
}
function getDetails(req,res) {
    const {messageId} = req.params;
    res.render("details",{message:findMessage(Number(messageId))});
}

export {getDetails};