const express=require('express');
const port=8000;
const app=express();

// import datasbse
const db=require('./config/mongoose')
//lauoyt
const expresLayout= require('express-ejs-layouts');
app.use(expresLayout);
//include style and scripts
app.set("layout extractStyles",true)
app.set("layout extractScripts",true)
//static file
app.use(express.static('./assets'))
// router set
app.use('/',require('./routes/index'))

//view set
app.set('view engine','ejs')
app.set('views','./views')








app.listen(port,()=>{
    console.log(`runing on port:${port}`);
})