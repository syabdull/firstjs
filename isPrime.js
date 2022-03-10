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
     //iife immediately invoked function Expression
  (function ab(){
        console.log("iam Abdulla");
   })();
//another function for practice 
(function ab1(){
     console.log("iam iffe too");
})();
//Third iife function for practice 
(function (){
     console.log("cool stuff");
})();
// iffe with parameter
(function(num1,num2){
 console.log(num1/num2);
})(10,2);
//above is the iffi function with parameter

        // arras
        let arr=[];
        console.log(arr);
        // array with elements
        let arr1=["string ",23.55,34,false,'c'];
        console.log(arr1);
        //epty array with out elements 
        let ab3=[2,3,"abdulla",'d',"rehmath","mehaboob"];
        console.log(ab3);
        console.log(ab3[2]);
        // Arrays Methods 
        //push method 
        let ele=[];
        console.log(ele);
        ele.push("Abdulla");
        ele.push("Rehmath");
        ele.push("Mehaboob");
        ele.push("Ashraf");
        console.log(ele);
        //push adds the element at the end
        //pop method 
    let arr2=[2,3,"Abdulla","Mehaboob","rehamath",'c'];
    arr2.pop();
  console.log(arr2);
  //shift removes the elemetn from the first 
  let  arr3=["firstOne","SecondOne","ThirdOne",20,30];
   arr3.shift();
   console.log(arr3);
   // all about unshift
   arr3.unshift("Abdulla");
   console.log(arr3);
   
   
  

