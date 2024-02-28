var i = 3;
var sum = 0;
for(;i<=8;i++){
        sum=sum+i}
    console.log('the sum of natural number 3 to 8 is',sum)
    //
var i = 3;
var d = 5;
var n = 100;
var nthTerm = i+(n-1)*d
console.log("the nth term is",nthTerm)
for(;i<=nthTerm;i=i+d){
    sum= sum+i
    console.log("the nth term is",sum)
}
//
var i = 1;
var sum = 0;
for(;i<=500;i=i+2){
    sum=sum+i
    console.log(i)
    console.log("now the sum is",sum);
}
console.log("the sum of all odd numbers from 1 to 500 is",sum)
//
var i = 2;
var sum = 0;
for(;i<=500;i=i+2){
    sum=sum+i
    console.log(i)
    console.log("now the sum is",sum);
}
console.log("the sum of all even numbers from 1 to 500 is",sum)