const express=require('express')

const {addState,getAllState}=require('../controller/state')
const router=express.Router()
const authMiddleware=require('../middleware/auth')

router.get('/',authMiddleware,getAllState)
router.post('/',authMiddleware,addState)

module.exports=router
