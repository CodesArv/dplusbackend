const app = require("./app");

const dotenv = require("dotenv");
const connectDatabse = require("./config/database");
const cloudinary = require("cloudinary");
const http = require("http")


process.on("uncaughtException",(err)=>{
    console.log('Error: ${err.message}');
    console.log('server was shutdown ');
        process.exit(1);
 
});

dotenv.config({ path: "backend/config/config.env" });




cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
}); 

connectDatabse();


const server =app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
});



// unhandled promise rejaction

process.on("unhandledRejection",(err)=>{
    console.log('Error: ${err.message}');
    console.log('server was shutdown ');

    server.close(()=>{
        process.exit(1);
    });
});








