//Express GENERATOR---> it generate the complete base template for the abcjend with view engine

// npx install express-generator

const express = require('express');
const app = express();
express.static('./public/');
app.use(express.static("./public"));

app.use("/static", express.static("public"));

const PORT = 3000

// app.use('/',(req,res)=>{
//     res.end("Hello this is server ");
// })

app.get('/app',(req,res)=>{
    res.end("neww page");
})
app.listen(PORT,()=>{
    console.log("Server is Running ");
})
