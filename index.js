const express = require('express');

const app = express();

const PORT = process.env.PORT || 8060;

app.get("/",(req,res)=>{
    res.send({"msg":"Welcome to Home Page."});
});

app.listen(PORT,()=>{
    console.log(`Server is running on the localhost port : ${PORT}`);
});