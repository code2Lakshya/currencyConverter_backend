const express=require('express');
const router=express.Router();

const {getAllCurrencies}=require('../controllers/getAllCurrency');
const {convertCurrency}=require('../controllers/convertCurrency');

router.get('/currencies',getAllCurrencies);
router.post('/convert',convertCurrency);

module.exports=router;