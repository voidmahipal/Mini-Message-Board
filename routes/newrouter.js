import { Router } from "express";
import { getNewForm,postNewForm } from "../controller/formcontroller.js";

const newRouter = Router();

newRouter.get("/",getNewForm);
newRouter.post("/",postNewForm);

export default newRouter;