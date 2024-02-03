const express=require('express')
const router=express.Router()


const purchaseController=require('../Controllers/purchase')
 const userAuthentication=require('../Middleware/auth')

router.get('/premiummembership',userAuthentication.authenticate,purchaseController.purchasePremium)

router.post('/updatetransactionstatus',userAuthentication.authenticate,purchaseController.updateTransaction)
module.exports=router