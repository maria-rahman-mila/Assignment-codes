function Greet(Username="guest"){
    console.log("hi welcome to the js code learning",Username)
 }
 Greet("Mila");

 //
 function equation (x){
    var Y=x**2+2*x+6
   return Y
}
console.log(equation(4));
//
var ar=[2,4,6,8];
var squarednumbers =ar.map(ar=>ar**2)
console.log("the new array function is",squarednumbers);
//
var prompt= require("prompt-sync")();
var num1= Number(prompt("enter the first nnumber"));
var num2 = Number(prompt("enter the second number"));
function add (num1,num2){
   var x= num1;
   var y= num2; 
   var z=x+y; 
   return z;
}
var addition  =add(num1,num2);
console.log("addition is ",addition);
function sub (num1,num2){
   var a= num1
   var b= num2
   var c=a-b;
   return c;
}
var substraction=sub(num1,num2);
console.log("substraction is",substraction);
function mult (num1,num2){
   var a= num1
   var b= num2
   var c=a*b;
   return c;
}
var multiplication=mult(num1,num2);
console.log("multiplication is",multiplication);
//
var prompt= require("prompt-sync")();
var num1= Number(prompt("enter the first nnumber"));
var num2 = Number(prompt("enter the second number"));
function add (num1,num2){
   var x= num1;
   var y= num2; 
   var z=x+y; 
   return z;
}
var addition  =add(num1,num2);
console.log("addition is ",addition);
function sub (num1,num2){
   var a= num1
   var b= num2
   var c=a-b;
   return c;
}
var substraction=sub(num1,num2);
console.log("substraction is",substraction);
function mult (num1,num2){
   var a= num1
   var b= num2
   var c=a*b;
   return c;
}
var multiplication=mult(num1,num2);
console.log("multiplication is",multiplication);