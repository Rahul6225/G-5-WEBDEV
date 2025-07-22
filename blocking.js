const crypto = require('crypto');
const fs = require('fs');
const https =  require('http');

crypto.pbkdf2("helloPassword","salt",50000,50,"sha512",(err,key)=>{
    console.log("Key is generated:",key);
    
})
fs.readFileSync("./file.txt", "utf-8") 
  console.log("file data:");

fs.readFile('./file.txt' ,'utf-8',(err,res)=>{
    console.log("file data:",res);
})
setImmediate(()=>{
    console.log("it is setimmediate");
    
})
setTimeout(()=>{
    console.log("SetTimeout");
    
},0);

function add(a,b){
    const res = a+b;
    return res;
} 
const res = add(2,9);
console.log(res);

