const express = require('express');
const app = express();
const path = require('path');
app.get('/',(req,res)=>{
    //res.send("Hello world!");
    res.sendFile(path.join(__dirname,'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Server running on https://localhost:${port}');
});

