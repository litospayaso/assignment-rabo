const iban = require('../iban.js');

const accountNumber = account => {
    return iban.isValid(account);
}

module.exports = accountNumber;