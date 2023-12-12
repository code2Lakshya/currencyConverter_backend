const cc = require('currency-converter-lt');
const db = require('../config/dbConnect');

exports.convertCurrency = async (req, res) => {
    try {
        const { from, to, value } = req.body;
        let amount = Number(value);
        let resSend = false;
        if (!from || !to || !amount) {
            res
                .status(400)
                .json({
                    success: false,
                    message: 'Please Send Valid details'
                })
            resSend = true;
        }
        if (!resSend) {
            const currencyConvertor = new cc();
            const response = await currencyConvertor.from(from).to(to).amount(amount).convert();
            const rates = await currencyConvertor.rates();
            const obj = {
                from,
                to,
                amountToBeConverted: amount,
                convertedAmount: response,
                rates
            }
            const insertQuerry = `INSERT INTO posts (input_amount, input_currency, rate, output_amount, output_currency)
            VALUES(?,?,?,?,?)`;
            db.query(insertQuerry, [amount, from, rates, response, to], (err, result) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                return result;
            })
            res
                .status(200)
                .json({
                    success: true,
                    message: 'Currency Successfully Converted',
                    response: obj
                })
        }
    }
    catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: `Internal Server Error ${error.message}`
            })
    }
}