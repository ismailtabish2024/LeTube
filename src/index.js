import dotenv from "dotenv";

import connectDB from "./db/db.js";
import app from "./app.js"; 

dotenv.config({
    path : './env'
})



connectDB() .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection failed:", err.message);
    process.exit(1); // stop app if DB fails
  });







































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