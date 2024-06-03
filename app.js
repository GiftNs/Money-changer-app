// tab : usb =  200
const currence = [
    {
        idt : 'GBP',
        valeur :  1
    },
    {
      idt : 'CDF',
      valeur : 2995.41 
    },
    {
        idt : 'EUR',
        valeur :  1.13
      },
      {
        idt : 'JPY',
        valeur :  168.50
      },
      {
        idt : 'CAD',
        valeur :  1.66
      },
      {
        idt : 'CHF',
        valeur : 1.12
      },
      {
        idt : 'AUD',
        valeur :  1.86
      },
      {
        idt : 'NZD',
        valeur :  1.98
      },
      {
        idt : 'SEK',
        valeur : 12.34
      },
      {
        idt : 'NOK',
        valeur :  12.53
      },
      {
        idt : 'RUB',
        valeur :  93.27
      },
      {
        idt : 'ZAR',
        valeur :  22.42
      },
      
      {
        idt : 'NGN',
        valeur : 584.38
      },
      {
        idt : 'KES',
        valeur : 154.36
      },
      {
        idt : 'MAD',
        valeur :  13.31
      },
      {
        idt : 'ZMW',
        valeur :  23.89 
      },
] 
let entryValue = document.getElementById('inputValue')
let inputList = document.querySelectorAll(".intputMoneyContainer form select") 
let outputList = document.querySelectorAll(".outputMoneyContainer form select") 
let outputValue = document.getElementById('outputValue')
let exchangeRate = document.getElementById('exchangeButton')


entryValue.addEventListener("click", () => {

})
console.log(inputList);
console.log(outputList);
let x = 0


let money = ''

let val = 0
function currency(val, money) {
if (money === cash[0]) {
    val *= 2700
} else if(money === cash[1]) {
    val /= 2700
   
} else {
    alert('write a money')
   
}
return val
}

