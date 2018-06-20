const startBalance = balance => {
    return !isNaN(parseFloat(balance)) && isFinite(balance);
}
module.exports = startBalance;