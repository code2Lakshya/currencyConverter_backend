const cc = require('currency-converter-lt');

exports.convertCurrency = async (req, res) => {
    try {
        const { from, to, value } = req.body;
        let resSend = false;
        if (!from || !to || !value) {
            res
                .status(400)
                .json({
                    success: false,
                    message: 'Please Send Valid details'
                })
            resSend = true;
        }
        if(!resSend) {
            const currencyConvertor = new cc();
            const response = await currencyConvertor.from(from).to(to).amount(value).convert();
            const rates=await currencyConvertor.rates();
            const obj={
                from,
                to,
                amountToBeConverted: value,
                convertedAmount: response,
                rates
            }
            res
                .status(200)
                .json({
                    success: false,
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