const mongoose = require("mongoose");

const connectDatabse = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      authSource: "admin",
    })
    .then((data) => {
      console.log(`mongodb connected with sever: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabse;
