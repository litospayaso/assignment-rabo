const endBalance = (startBalance,mutation,endBalance) => {
    if (mutation[0] === '+'){
        return (endBalance*1) === Math.round(((startBalance*1) + (mutation.slice(1)*1)) * 100) / 100;
    }else{
        return (endBalance*1) === Math.round(((startBalance*1) - (mutation.slice(1)*1)) * 100) / 100;
    }
} 
module.exports = endBalance;