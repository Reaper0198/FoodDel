import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://kmtyagi198:198kmtyagi@cluster0.lkalh.mongodb.net/food-del').then(()=>console.log("DB connected..."));

}