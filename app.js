import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import indexRouter from "./routes/indexrouter.js";
import newRouter from "./routes/newrouter.js";
import detailsRouter from "./routes/detailsrouter.js";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const app = express();

app.set("views",path.join(__dirName,"views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

app.use("/",indexRouter);
app.use("/new",newRouter);
app.use("/details/:messageId",detailsRouter);

app.listen(process.env.PORT || 3000,(err)=>{
    if(err) {
        console.error("Server ran into an error");
        return;
    }
});