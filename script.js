// alert("BLESSED");
// console.log("DARLING JESUS")
// alert("MY NAME IS FAITH");
// let age = 20;
// age = 50;
// alert(age);
// let animal = "TIGER";
// animal = "LION";
// console.log(animal);
// let name = "EKPERE";
// let greet = `Hello ${name}`;
// console.log(greet);
// letsum
// let x = 5;
// x += 3;
// console.log(x);
// x -= 3;
// console.log(x);
// x *= 3;
// console.log(x);
// x /= 3;
// console.log(x);
// console.log( 5 == "5");
// console.log(5 === "5");
// // let user = true;
// console.log(5 != 5);
// console.log(5 != "5");
// console.log(10 > 5);
// console.log(5 != 5);
// console.log(5 != 5);

let age = 20;
let userId = true;

if(age >= 18 && userId){
    console.log("access granted");
}else{
    console.log("Your underaged");
}

if (age >= 18 && userId) {
    console.log("access granted");
}else{ 
    console.log("you are underaged");
}

let isRaining = false;
if (!isRaining) {
    console.log("rain is falling");
}else{
    console.log("its not raining")
}
let num = 2;
console.log(typeof num);
let color = "red";
console.log(typeof color);
let user = true;
console.log(typeof user);

let vota = 18;
if (vota >= 18) {
    console.log("You are allowed to vote");
}else{
     console.log("You are not allowed to vote");
}

let score = 85;
if (score >= 90) {
    console.log("Grade A");
}else if(score >= 80){
    console.log("Grade B");
}else if(score >=70){
    console.log("Grade C")
}else if(score >= 60){
    console.log("Grade D");
}else{
    console.log("You failed the exam not me");
}
// nested if statement
let vot;
let votaId = true;
if (vot >= 18) {
    if (votaId ) {
        console.log("You can vote");
    }else{
        console.log("Please get your id");
    }
}else{
    console.log("You must be 18 to vote");
}

if (vot >= 18 && votaId) {
    console.log("You up to age")
}else{
    console.log("You are not up to age")
};





