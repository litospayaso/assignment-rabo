var express = require('express');
const transactionReference = require('./validators/transactionReference.js');
const accountNumber = require('./validators/accountNumber.js');
const startBalance = require('./validators/startBalance.js');
const mutation = require('./validators/mutation.js');
const description = require('./validators/description.js');
const endBalance = require('./validators/endBalance.js');
var app = express();

  /**
 * This file generate a service for each validator.
 */
app.get('/transactionReference/:ref', function (req, res) {
  res.send(transactionReference(req.params.ref));
});
app.get('/accountNumber/:ref', function (req, res) {
  res.send(accountNumber(req.params.ref));
});
app.get('/startBalance/:ref', function (req, res) {
  res.send(startBalance(req.params.ref));
});
app.get('/mutation/:ref', function (req, res) {
  res.send(mutation(req.params.ref));
});
app.get('/description/:ref', function (req, res) {
  res.send(description(req.params.ref));
});
app.get('/endBalance/:ref', function (req, res) {
  res.send(endBalance(req.query.startBalance,req.query.mutation,req.query.endBalance));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
