let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let two_zeros = document.getElementById("two-zeros");
let AC = document.getElementById("AC");
let DE = document.getElementById("DE");
let dot = document.getElementById("dot");
let mod = document.getElementById("mod");
let mul = document.getElementById("mul");
let min = document.getElementById("min");
let sum = document.getElementById("sum");
let equal = document.getElementById("equal");

let contain = document.getElementById("show");

zero.addEventListener("click", () => {
    contain.value += "0";
});
two_zeros.addEventListener("click", () => {
    contain.value += "00";
});
one.addEventListener("click", () => {
    contain.value += "1";
});
two.addEventListener("click", () => {
    contain.value += "2";
});
three.addEventListener("click", () => {
    contain.value += "3";
});
four.addEventListener("click", () => {
    contain.value += "4";
});
five.addEventListener("click", () => {
    contain.value += "5";
});
six.addEventListener("click", () => {
    contain.value += "6";
});
seven.addEventListener("click", () => {
    contain.value += "7";
});
eight.addEventListener("click", () => {
    contain.value += "8";
});
nine.addEventListener("click", () => {
    contain.value += "9";
});
AC.addEventListener("click", () => {
    contain.value = "";
});
dot.addEventListener("click", () => {
    contain.value += ".";
});
mod.addEventListener("click", () => {
    contain.value += "/";
});
mul.addEventListener("click", () => {
    contain.value += "*";
});
min.addEventListener("click", () => {
    contain.value += "-";
});
sum.addEventListener("click", () => {
    contain.value += "+";
});
DE.addEventListener("click", () => {
    contain.value = contain.value.toString().slice(0, -1);
});

equal.addEventListener("click", () => {
    contain.value = eval(contain.value);
})