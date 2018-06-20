const transactionReference = reference => {
    return !isNaN(parseFloat(reference)) && isFinite(reference);
}
module.exports = transactionReference;