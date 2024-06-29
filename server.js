const app = require("./app");

const dotenv = require("dotenv");
const connectDatabse = require("./config/database");
const cloudinary = require("cloudinary");
const http = require("http");

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("server was shutdown ");
    process.exit(1);
});

<<<<<<< HEAD
dotenv.config({ path: "backend/config/config.env" });
=======
dotenv.config({ path: "config/config.env" });
const PORT = process.env.PORT;
>>>>>>> e8cd5c8591b305bf5d8847cb2ebe30c050f0d9b9

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

connectDatabse();

<<<<<<< HEAD

const server =app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT ||5000}`)
    console.log(process.env.PORT ||5000,"hjhjhj")
=======
const server = app.listen(PORT, () => {
  console.log(`server is working on http://localhost:${PORT}`);
>>>>>>> e8cd5c8591b305bf5d8847cb2ebe30c050f0d9b9
});

// unhandled promise rejaction

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("server was shutdown ");

  server.close(() => {
    process.exit(1);
  });
});
