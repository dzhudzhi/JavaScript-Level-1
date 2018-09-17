let num = 0;
let numObj = {
    units: 0,
    dozens: 0,
    hundreds: 0
}

num = parseInt(prompt("Введите число от 0 до 999"));

if (( num >= 0 ) && ( num <= 999 )) {
    numObj.hundreds = (num - num % 100) / 100;
    num -= numObj.hundreds * 100;
    numObj.dozens = (num - num % 10) / 10;
    numObj.units = num - numObj.dozens * 10;
}

console.log(numObj);