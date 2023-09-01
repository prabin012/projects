import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    contact: {
       type: String,
      
       
    },
    password :{
        String,
        
    } 
     
   
   
})
export const Users =mongoose.model("Users",newSchema);