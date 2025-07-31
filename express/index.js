//Express GENERATOR---> it generate the complete base template for the backend with view engine

// npx install express-generator

const express = require('express');
const app = express();
const PORT = 3000
// express.static('./public/');
// app.use(express.static("./public"));

// app.use("/static", express.static("public"));

app.get('/',(req,res)=>{
    res.end("Hello this is server ");
})
app.get('/app',(req,res)=>{
    res.end("neww page");
})
 
app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("something occured");
    }
})

app.listen(PORT,()=>{
    console.log("Server is Running ");
})

//If ,you need any application level middleware
