const currencySymbolMap = require('currency-symbol-map/map');
const currencyCode = require('currency-codes/data');


exports.getAllCurrencies = (req, res) => {
    const currencySymbols = [];
    for (const item of currencyCode) {
        const obj = {
            ...item,
            symbol: currencySymbolMap[item.code]
        }
        currencySymbols.push(obj);
    }
    res.status(200)
        .json({
            success: true,
            response: currencySymbols
        })
}