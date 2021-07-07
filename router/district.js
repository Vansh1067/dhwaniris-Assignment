const express=require('express')

const {addDistrict,getDistrict,getAllDistrict}=require('../controller/district')
const router=express.Router()
const authMiddleware=require('../middleware/auth')


router.get('/',authMiddleware,getAllDistrict)

router.get('/:stateId',authMiddleware,getDistrict)

router.post('/',authMiddleware,addDistrict)

module.exports=router
