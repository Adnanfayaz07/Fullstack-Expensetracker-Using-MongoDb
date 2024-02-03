const express=require('express')
const router=express.Router()
const expenseController=require('../Controllers/expense')
const userAuthentication=require('../Middleware/auth')
const downloadController=require('../Controllers/download')

// EXPENSE ROUTES
router.post('/add-expenses',userAuthentication.authenticate,expenseController.addExpenses)
router.get('/get-expenses',userAuthentication.authenticate,expenseController.getExpenses )
router.get('/day-expenses',userAuthentication.authenticate,expenseController.getDayExpenses)
router.get('/month-expenses',userAuthentication.authenticate,expenseController.getMonthExpenses)
router.delete('/delete-expense/:id',userAuthentication.authenticate,expenseController.deleteExpense)


//Download  Routes

router.get('/downloadExpenses',userAuthentication.authenticate,downloadController.downloadExpenses)
router.get('/getdownloadedURLS',userAuthentication.authenticate,downloadController.getURLS)


module.exports=router