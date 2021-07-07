const express=require('express')

const {login,logout}=require('../controller/user')
const router=express.Router()
const authMiddleware=require('../middleware/auth')

router.post('/login',login)
router.post('/logout',authMiddleware,logout)

module.exports=router