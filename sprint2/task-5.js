//print 1-10
for (i=1;i<=10;i++){
    console.log(i)
}
print 1 -20 even numbers
for(i=1;i<=20;i++)
{

    if(i%2==0){ console.log(i)}
   
}
print 1-20 odd numbers
for(i=1;i<=20;i++)
{

    if(i%2!=0)
        { console.log(i)}
   
}
print factorial of a  number
 let n =5
 let fact=1;
for ( let i=1;i<=n;i++){
    fact*=i;
   
}
 console.log(fact)
print sum of 1-100 or natural numbers
let n=100;
sum=(n*(n+1))/2;
console.log(sum)
print sum of array elements and avg
let n=[1,2,3]
let sum=0
for(let i=0;i< n.length;i++){
    sum+=n[i]
}
console.log(sum)
let avg=sum/n.length
console.log(avg)
print  square pattern 
let n = 5;
for (i = 1; i <= n; i++) {
    line = ""
    for (j = 1; j <= n; j++) 
        { line += "*" }
    console.log(line)

}
print numbers 1-5
let n=5;
for(i=1;i<=5;i++){
    console.log(i)
}
print first 10 natural number
for (let i=1;i<=10;i++){
    console.log(i)
}
check the 1st and last number is same in array
a=[10,20,30,16]
if(a[0]===a[(a.length-1)]){
    console.log(true)
}
else{
    console.log(false)
}
print numbers divisible by5
for(i=1;i<=10;i++){
    if(i%5==0){
        console.log(i)
    }
}
check given char is vowel or not
char="l"
if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
    console.log("vowel")

}
else{
    console.log("consonent")}
count even and odd numbers between 10 to 55
let even=0;
let odd=0;
for(i=10;i<=55;i++){
    if(i%2==0){
        even++;
    }
    else{
        odd++;
    }
}
console.log("even : ",even);
console.log("odd: ",odd)
print 1 to 25 exclude multiples of 5
for(i=0;i<=25;i++){
    if(i%5!==0){
        console.log(i)
    }
}
factorial of each elemnt in array
let a=[3,3,2]

for(i=0;i<a.length;i++){
    fact=1
    n=a[i]
    for(j=1;j<=n;j++){
        fact*=j
    }
    console.log(fact)
}
given two integers sumexists above 500 print their product
let a=10;
let b=700;
if(a+b>500)
{
    console.log("sum is above 500:",a+b)
    console.log("product",a*b)
}
greatest of two numbers
let a=3;
let b=7;
if (a>b){
    console.log("a is greatest")
}
else{
     console.log("b is greatest")
}
greatest of three numbers
let a=3;
let b=7;
let c=30;
if (a<c&&b<c){
    console.log("c is greatest")
}
else if(b<a&&c<a){
     console.log("c is greatest")
}
else{
    console.log("b is greates")
}
separate positive and negative integers from array
x = [23, 4, -6, 23, -9, 21, 3, -45, -8]   
pos=[];
neg=[];
for(i=0;i<=x.length;i++){
    if(x[i]>=0){
        pos.push(x[i])
    }
    else{
        neg.push(x[i])
    }
   
}
 console.log("positive",pos)
    console.log("negative",neg)