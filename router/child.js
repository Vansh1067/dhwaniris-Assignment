const express=require('express')

const {addChild,getAllChild,getChildDetails}=require('../controller/child')
const router=express.Router()
const authMiddleware=require('../middleware/auth')

router.get('/',authMiddleware,getAllChild)
router.get('/:childId',authMiddleware,getChildDetails)
router.post('/',authMiddleware,addChild)

module.exports=router
