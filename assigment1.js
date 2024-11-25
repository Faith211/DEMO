// let firstName = "Faith";
// let lastName = "Chinaza";
// let age = 27;
// console.log("My name is "+ firstName + " "+ lastName+ " and i am "+ age + " years old.")
// let num1 = 10;
// let num2 = 20;
// let sum = num1*num2;
// console.log(sum)
// let subtraction = num2 - num1;
// console.log(subtraction);
// const greeting = "Hello ";
// const message = "Welcome to the JavaScript";
// const fullGreeting = greeting + message;
// console.log(fullGreeting);
// let userName = "Chi";
// let email = "kossy@gmail.com";
// age = 28;
// let favoriteColor = "white";
// alert(userName +" | "+ email +" | " + " " + age + " | " + favoriteColor);
// favoriteColor = "pink";
// console.log (`Kosara ${userName}`);
// const age = 18;
// const ticket = "true";
// if (age === 18 && ticket) {
//     console.log("Access granted. Enjoy the movie!");
// }else if (age === 18 && !ticket){
//     console.log("You need a ticket to enter!");
// }else if (age < 18 && ticket){
//     console.log("Sorry, you must be 18 or older to watch this movie. ");
// }else{
//     console.log("You must be 18 or older and have a ticket to enter!")
// }

// let purchase = 100;
// let membership = true;
// if (purchase >= 100 && membership) {
//     console.log("You are eligible for a 20% discount!");
// }else if(purchase >= 100 && !membership){
//     console.log("You are eligible for a 10% discount!")
// }else if(purchase < 100 && membership){
//     console.log("You are eligible for a 5% discount!");
// }else if(purchase < 100 && !membership){
//     console.log("No discount available!");
// }else{
//     console.log("ooop");
// }
// //  eg i for loop
// for (let i = 0; i <=  5; i++) {
//     console.log("Good morning", i);
// }

// // eg of while use while loop when you don't 
// //know the exact time you want the code to run
// let count = 1;
// while (count <= 3) {
//     console.log("counting", count)
//     count++;
//  }
// // eg of for-of loop is use to go through each 
// //item in a list, and is used when you don't know
// //if you don't need to know the position of each item
// let colors = ["red, orange, white, pink"]
// for (let color of colors) {
//     console.log(colors)
// }

// // switch statement is a type of control actions,
// //and test a variable or expression again list
// let they = 3;
// switch (they) {
//     case they:
//         console.log("Monday")
//         break;

//     case they:
//         console.log("Tuesday")
//         break;

//         case they:
//         console.log("Wenesday")
//         break;

//         case they:
//         console.log("Thursday")
//         break;

//         case they:
//         console.log("Friday")
//         break;

//     default:
//         console.log("Invalid day")
//         break;
// }
// let firstname = null;
// let surname = "faith";
// let fullname = name??"unknown";
// // console.log(fullname);
// let value = 0;
// let result1 = value ?? 10;
// let result2 = value || 10;
// console.log(result1)
// console.log(result2)

// let name = "Ekpereamaka";
// name === null? console.log("blessed"):console.log("Omologo");
// function greet() {
//     console.log("you're welcome Jesus");
// }
// // greet();
// let firstname = "Ekpere";
// let greet = (firstname)=>{
//     console.log("Hi " + firstname + " Jesus love you");
// }
// greet(firstname);

// let student = ["Joy", "James", "Jude", "John", "Blessing", "Mercy"];
// console.log(student[1]);
// console.log(student);
// student.push("Grace");
// console.log(student);
// student.pop()
// console.log(student);
// student.pop("John");
// console.log(student);
// let a = 3;
// let b = 8;
// let c = a;
// a = b;
// b = c;
// console.log(c);
// console.log(a);
// console.log(b);
// let yourName = prompt("what is your name");
// let myName = "Ekpere";
// alert("my name is  " + myName + " welcome tp my page " + yourName);

// let n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n);

let crush = prompt("what is your crush's name");
let person = prompt("what is your name");
let lovescore = Math.random() *100;
lovescore = Math.floor(lovescore) +1;
if (lovescore > 80) {
    alert(person + " your lovescore between" + crush + " is " + lovescore + "%, your love is great ");
}else if ( lovescore > 60 && lovescore <= 80){
    alert(person + " your love lovescore between " + crush + " is " + lovescore + "%, your love is high ");
}else if ( lovescore > 30 && lovescore <= 60){
    alert(person + " your love lovescore between " + crush + " is " + lovescore + "%, your love is medium ");
}
else if ( lovescore > 10 && lovescore <= 30){
    alert(person + " your love lovescore between " + crush + " is " + lovescore + "%, your love is low ");
}
else{
    alert(person + " Your love lovescore between " + crush + " is " + lovescore + "%, your love is very low ");
}