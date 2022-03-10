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