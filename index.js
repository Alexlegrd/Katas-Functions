
function add (num1, num2) {
    return(num1+num2);
 }
 
 
 function multiply (num1,num2) {
    var count = 0;
    for (var i = 0; i<num1; i++ )
 {
   count = add(count,num2); 
 }
 return(count);
 }
 multiply(3, 3)


 function power (x,n) {
 var exponent = 1;
 for (var i = 1; i<=n; i++ )
 {
   exponent = multiply(exponent,x); 
 }
 return (exponent);
 }
 
 function factorial(x) {
 var fact = 1;
 for (var i = 1; i<=x ; i++){
 fact = multiply(i,fact);
 }
 return(fact);
 }
 factorial(5)
 
 function fibonacci (x){
 var One = 0;
 var Two = 1;
 var three = 0;
 for ( var i=2; i<x; i++){
     track = add(One,Two);
     One = Two;
     Two = three;
 }
 return(three);
 }


console.log("hello");

