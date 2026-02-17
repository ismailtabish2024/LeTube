import dotenv from "dotenv";


import connectDB from "./db/db.js";

dotenv.config({
    path : './env'
})



connectDB();





































// (async() =>{
//     try {

//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("ERROR",(error)=>{
//             console.log("ERROR : " ,error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App was listening on port ${process.env.PORT}`)
//         })
        
//     } catch (error) {
//         console.error("ERROR",error);
//         throw err
//     }
// })()