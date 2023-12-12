const express = require('express');
const app = express();

require('dotenv').config();

const cors = require('cors');
app.use(cors({
    origin: '*'
}))
app.use(express.json());

const port = process.env.PORT || 1234;

app.listen(port, () => {
    console.log('Server Started Listening At Port: ', port);
})
app.get('/', (req, res) => {
    res.send('Currency Convertor Server');
})

require('./config/dbConnect');
require('./schema/requestSchema');

const router = require('./routes/currency');
app.use('/api/v1', router);
