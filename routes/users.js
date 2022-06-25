const express=require('express');
const router=express.Router();

let user=require("../controller/userController")

router.get('/profile',user.profile)
router.get('/',user.home)

module.exports=router;