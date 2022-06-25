const express=require('express');
const router=express.Router();

let home=require("../controller/homeController")


router.get('/',home.home);
router.get('/about',home.about);
router.use('/users',require('./users'))
console.log('router loaded');
module.exports=router;