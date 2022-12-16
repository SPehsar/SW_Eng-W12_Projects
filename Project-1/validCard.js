const validCard = (cardNumber) => {
  // First obtain an array of digits of the given credit card number.
  let numberIntoDigitStrings = (cardNumber + '').split('')
  let reverseStringDigits= numberIntoDigitStrings.reverse()
  let convertStringDigitsToArrayOfDigits = reverseStringDigits.map(x => parseInt(x));

  let nDigits = convertStringDigitsToArrayOfDigits.length;
 
    let numSum = convertStringDigitsToArrayOfDigits[0] 
   
    isSecondDigit = true; // condtion to multiply every other digit by 2
    for (let i = 1; i <= (nDigits-1); i++) {
 
        let d = convertStringDigitsToArrayOfDigits[i];
 
        if (isSecondDigit == true){
      
            d = d * 2;
            if (d >= 10){  // if it is double digits

              numSum += 1;  
              numSum += d % 10;
       
              isSecondDigit = !isSecondDigit;
            } else {
              numSum += d;
              isSecondDigit = !isSecondDigit;
            }
        } else {
          numSum += d           
          isSecondDigit = !isSecondDigit;          
        }
    }
    return (numSum % 10 == 0);
}

console.log(validCard(1234567890123456));// Should be false
console.log(validCard(4408041234567893));// Should be true
console.log(validCard(38520000023237));// Should be true
console.log(validCard(4222222222222));// Should be true