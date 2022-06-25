const express=require('express');
const port=8000;
const app=express();

// router set
app.use('/',require('./routes/index'))

//view set
app.set('view engine','ejs')
app.set('views','./views')








app.listen(port,()=>{
    console.log(`runing on port:${port}`);
})