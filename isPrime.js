let n=10;
 let ans=1;
   if(n<=1){
       ans=0;
   }
for(let i=2;i*i<=n;i++){
     if(n%i==0){
         ans=0;
     }
}
if(ans==0){
    console.log("not a prime");
}else{
    console.log("is Prime");
}
// function in js with out parameter
function sayHello(){
    console.log("hello there");

}
sayHello();
//function with parameter
 function sum(num1,num2){
     //addation of given no
     let addation =num1+num2;
     console.log("addation of given no is"+addation);
 }
 sum(12,13);
 //function with return type 
 function multiplicationOfTwo(num1,num2){
     let mul=num1*num2;
     return mul;
 }
 console.log(multiplicationOfTwo(1,100));
 //storing funcion in a variable 
 let fun=function sub(num1,num2){
        let subraction =num2-num1;
        console.log(subraction);
 }
    fun(10,30);