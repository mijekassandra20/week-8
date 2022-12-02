const validCreditCard = (num) => {

    let convert = String(num)
    
    let regex = /^[4,5,6]+(\d{3}-?\d{4}-?\d{4}-?\d{4})/gm
    let regRepChar = /([\d])\1\1\1/gm
    let replace = convert.replace(/-/g, '')
    
    let result = convert.match(regex)
    let result2 = replace.match(regRepChar)
    
    console.log(replace)
    
    if(result && !result2){
        return 'valid'
    } else {
        return 'invalid'
    }
    
}

console.log(validCreditCard(4123456789123456)) // valid
console.log(validCreditCard(`5123-4567-8912-3456`)) //valid
console.log(validCreditCard(61234-567-8912-3456)) //invalid
console.log(validCreditCard(4123356789123456)) // valid
console.log(validCreditCard(5133-3367-8912-3456)) // invalid
console.log(validCreditCard(5123 - 4567 - 8912 - 3456)) //invalid