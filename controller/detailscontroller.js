import { findMessagesDetails } from "../db/queries.js";

async function getDetails(req,res) {
    const {messageId} = req.params;
    const messageDetails = await findMessagesDetails(Number(messageId));
    res.render("details",{message:messageDetails[0]});
}

export {getDetails};