const mongoose = require("mongoose");

const connectDatabse = ( ) =>{

    mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, 
        useUnifiedTopology: true,authSource:'admin' })
        .then((data) => {
        
            console.log(`mongodb connected with sever: ${data. connection. host}`);
            console.log(process.env.PORT ||5000,"hjhjhj")
        }).catch((err)=>{
       console.log(err)
        })
      
}

module.exports=connectDatabse;