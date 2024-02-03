const express=require('express')
const router=express.Router()
const premiumController=require('../Controllers/premium')

router.get('/showleaderboard',premiumController.showLeaderBoard)

module.exports=router