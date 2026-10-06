import { Router } from "express";
import { getDetails } from "../controller/detailscontroller.js";

const detailsRouter = Router({mergeParams:true});

detailsRouter.get("/",getDetails);

export default detailsRouter;