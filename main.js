let number = 88
// Even or Odd
if( number%2==0 ){
    console.log("It is even");
}
else{
    console.log("It is odd");   
}

//Grade
if (number >= 90 && number<=100){
    console.log("A");   
}
else if (number >= 80 && number <=89){
    console.log("B");   
}
else if (number >= 70 && number <=79){
    console.log("C");   
}
else if (number >= 60 && number <=69){
    console.log("D");   
}
else{
    console.log("F");       
}

// Prime Numbers

let Primecase=2;
if(number>1 && number%number==0 && number%Primecase!=0 ){
    console.log("Prime Numbers");
}
else{
    console.log("Not prime Numbers");    
}

// Fizz Buzz:
let num = 3
if(num%3==0 && num%5==0){
    console.log("fezzbuzz");
}
else if(num%3==0){
    console.log("fezz");
}
else if(num%5==0){
    console.log("buzz");
}

//Loops
//using for loop calculate the square number between 1 and 10.
console.log("square number between 1 and 10");
for(let i=1 ; i <= 10 ; i++){
    console.log(i*i);
}

console.log("odd number between 1 and 20");
//using any loop print odd number between 1 and 20.
for(let i=1 ; i <= 20 ; i++){
    if(i%2 != 0){
        console.log(i);
    }
}

console.log("even number between 1 and 25");
//using any loop print even number between 1 and 25.
for(let i=1 ; i <= 25 ; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

console.log("increment number");    
//using loop print the following.
    let Line=''
    for (let i=1; i<=8; i++) {
        for (let j = 1; j <= i; j++) {
            Line+= j + ''
        } 
        console.log(Line);
        Line=''
    }

console.log("Fibonacci sequence"); 
console.log("I GIVE UP... :( ");
//F_{n}=F_{n-1}+F_{n-2}}
// let num1 = 0
// let num2 = 1 
// for (let i=2; i<=20; i++) {
//     sum = (i-1)+(i+2)
//     console.log(sum);  
// }
