var prompt = require('prompt-sync')();
var firstItem = prompt('enter the price of firstItem')
var seconditem = prompt('enter the price of seconditem')
var thirditem = prompt('enter the price of thirditem')
var totalcost = Number(firstItem)+Number(seconditem)+Number(thirditem)
console.log(totalcost)
if (totalcost>100){
    var discount = .2
    var discountcost = totalcost - (totalcost* discount)
    console.log(discountcost)
}
else if (totalcost>50){
    var discount = .1
    var discountcost= totalcost-(totalcost* discount)
    console.log(discountcost)
}
//
var prompt = require('prompt-sync')();
var name = prompt("Enter your name: ")
if (name=='maria'){
    console.log('welcome')
}
else if (name=='rahman'){
    console.log('welcome')
}
else if (name=='mila'){
    console.log('welcomme')
}
else {
    console.log('Sorry! We don’t find you in the system.” Otherwise, it will display “Welcome!')
}
//
var prompt = require('prompt-sync')();
var year = prompt("Enter a year: ")
if (year%4==0){
    console.log('this is a leap year')
}
else {
    console.log('this is not a leap year')
}
//

var prompt = require('prompt-sync')();
var year = prompt("Enter a year: ")
if (year%4==0){
    console.log('this is a leap year')
}
else {
    console.log('this is not a leap year')
}
//
var prompt = require('prompt-sync')();
var number =prompt('enter the score of math')
var number2 =prompt('enter the score of english')
var number3 =prompt('enter the number of science')
var average = (Number(number)+Number(number2)+Number(number3))/3
console.log('final average score is',average)
if (average>60){
    console.log('your grade is A')
}
else if (average<60){
    console.log('your grade is F')
}
