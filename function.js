function sayHi(){
    console.log("Hey")
    console.log("Hi")
    
}
sayHi();
sayHi();

function sum(a, b) {
    console.log(a + b)

}
sum( 2, 4);

function greet(name = "John") {
    console.log("Hello " + name)
}
greet("Chuk");

function youName(good) {
    console.log("My name is " + good + " and i am ..... years old");    

}
youName("Blessed Faith ");

function go(you = "fine") {
    console.log("How are you, " + you);
}
go("Chy");

const geat = function (gee= "Juddy" ) {
    return " Hi my " + gee;
}
console.log(geat("friend"));

const add = (a, b) => a * b +  " years " +( b + a) + " years";
console.log(add (4, 5));

function sayHey() {
    let message = "God bless us ";
    console.log(message);
}
sayHey();

function all(names, agee, colo) {
    console.log("Hi " + names + " your age is " + agee + " and your color is "  + colo );
}
all("Chidi", 20, "green" )
all("Ifey", 25, "white" )
all("Ebere", 22, "pink" )
all("Chinma", 23, "purple")
all("Amaka ", 17, "blue" )