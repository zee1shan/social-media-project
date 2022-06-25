const express=require('express');
const port=8000;
const app=express();


app.use('/',require('./routes/index'))









app.listen(port,()=>{
    console.log(`runing on port:${port}`);
})