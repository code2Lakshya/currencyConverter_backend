const connection = require('../config/dbConnect');

const createTableQuery = ` 
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    input_amount DOUBLE NOT NULL,
    input_currency TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
    rate DOUBLE NOT NULL,
    output_amount TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
    output_currency TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
  );
  `;

connection.query(createTableQuery, (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    return result;
})
