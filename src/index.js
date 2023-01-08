module.exports = function reverse (n) {
    let nIsNegative = false;
    if(n < 0){
        nIsNegative = true;
        n = -n;
    }
    let rev_numb = 0;
    while (n != 0){
        rev_numb = rev_numb * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return rev_numb;
}
