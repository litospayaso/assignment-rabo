const transactionReference = require('./transactionReference.js');
const accountNumber = require('./accountNumber.js');
const startBalance = require('./startBalance.js');
const mutation = require('./mutation.js');
const description = require('./description.js');
const endBalance = require('./endBalance.js');

  /**
 * Function to validate a record parsed as a JSON object
 */
const validateRecord = record => {
	if(!transactionReference(record.transactionReference)){
		return `Reference: ${record.transactionReference} ;Error in transaction reference (it is not a number)`;
	}
	if(!accountNumber(record.accountNumber)){
		return `Reference: ${record.transactionReference} ;Error in account number (it is not an IBAN`;
	}
	if(!startBalance(record.startBalance)){
		return `Reference: ${record.transactionReference} ;Error in start balance (it is not a number)`;
	}
	if(!mutation(record.mutation)){
		return `Reference: ${record.transactionReference} ;Error in mutation format`;
	}
	if(!description(record.description)){
		return `Reference: ${record.transactionReference} ;Error in description (is empty)`;
	}
	if(!endBalance(record.startBalance,record.mutation,record.endBalance)){
		return `Reference: ${record.transactionReference} ;Error in balance: ${record.startBalance} ${record.mutation} = ${record.endBalance}`;
	}
	return true;
}

module.exports = validateRecord;