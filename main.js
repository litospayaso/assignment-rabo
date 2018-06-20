const fs = require('fs');
const csvParse = require('csv-parse');
const xmlStream = require('xml-stream');
const readline = require('readline');

const validateRecord = require('./validators/validateRecord.js');

  /**
 * Failed records output
 */
const failedRecords = [];
  /**
 * Array to check duplicates references
 */
const passRecords = [];
  /**
 * Account of passed records
 */
let passedAccount = 0;

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

  /**
 * Function to read from input console the route file
 */
rl.question('Type the route of your record file (xml or csv): ', file => {
	const re = /(?:\.([^.]+))?$/;
	switch (re.exec(file)[1]) {
		case 'xml':
			parseXML(file);
			break;
		case 'csv':
			parseCSV(file);
			break
		default:
			console.error('not supported file format');
			break;
	}
	rl.close();
});

  /**
 * Function to parse a XML file
 */
const parseXML = file => {
	var stream = fs.createReadStream('records.xml');
	var xml = new xmlStream(stream);
	xml.preserve('record', true);
	xml.collect('subitem');
	xml.on('endElement: record', function (item) {
		let record = {
			transactionReference: item.$.reference,
			accountNumber: item.accountNumber.$text,
			startBalance: item.startBalance.$text,
			mutation: item.mutation.$text,
			description: item.description.$text,
			endBalance: item.endBalance.$text,
		}
		let validateResult = validateRecord(record);
		if (validateResult === true) {
			if (passRecords[record.transactionReference] === undefined) { //Checking if duplicated reference
				passRecords[record.transactionReference] = record.transactionReference;
				passedAccount += 1;
			} else {
				failedRecords.push(`Reference: ${record.transactionReference} ;Error in duplicate reference`);
			}
		} else {
			failedRecords.push(validateResult);
		}
	});
	xml.on('end', function () {
		console.log(`Records parsed: ${passedAccount + failedRecords.length}`);
		console.log(`Passed records: ${passedAccount}`);
		if (failedRecords.length > 1) {
			console.log('Failed records:');
			failedRecords.forEach(elem => console.log(elem));
		}
	});
}

  /**
 * function to parse a CSV file
 */
const parseCSV = file => {
	let skipFirst = true;
	var csvData = [];
	fs.createReadStream('records.csv')
		.pipe(csvParse({ delimiter: ':' }))
		.on('data', function (item) {
			if(skipFirst){
				skipFirst=false;
			}else{
				item = item[0].split(',');
				let record = {
					transactionReference: item[0],
					accountNumber: item[1],
					description: item[2],
					startBalance: item[3],
					mutation: item[4],
					endBalance: item[5],
				}
				let validateResult = validateRecord(record);
				if (validateResult === true) {
					if (passRecords[record.transactionReference] === undefined) { //Checking if duplicated reference
						passRecords[record.transactionReference] = record.transactionReference;
						passedAccount += 1;
					} else {
						failedRecords.push(`Reference: ${record.transactionReference} ;Error in duplicate reference`);
					}
				} else {
					failedRecords.push(validateResult);
				}
			}
		})
		.on('end', function () {
			console.log(`Records parsed: ${passedAccount + failedRecords.length}`);
			console.log(`Passed records: ${passedAccount}`);
			if (failedRecords.length > 1) {
				console.log('Failed records:');
				failedRecords.forEach(elem => console.log(elem));
			}
		})
		.on("error", function (error) {
			console.log(error)
		});
}
