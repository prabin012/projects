import  express  from "express";
import userRouter from "./routes/user.js";

import { config } from "dotenv";
import cors from "cors";


export const app =express();
app.use(cors());
//config env connection
config({
    path : "./connection/config.env",
})



//middleware used

app.use(express.json());
app.use('/api',userRouter);


app.get('/', (req, res)=>{
    res.send("Server runung on the port")
});



