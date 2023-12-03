let f1 = document.getElementById("f1");
let f2 = document.getElementById("f2");
let input = document.getElementById("f3");
let result = document.getElementById("pass");

function Add() {
    if (f1 && f2) {
        let R1 = Math.random() * 100;
        let R2 = Math.random() * 100;
        f1.textContent = parseInt(R1);
        f2.textContent = parseInt(R2);
    }

}
Add();

function Check() {
    let val1 = parseInt(f1.textContent);
    let val2 = parseInt(f2.textContent);
    let answer = val1 + val2;
    let user = parseInt(input.value);
    if (answer === user) {
        result.textContent = "congratulations";
        result.style.color = "black";
        result.style.backgroundColor = "green";
    } else {
        result.textContent = "try again";
        result.style.color = "black";
        result.style.backgroundColor = "red";
    }
    f1.textContent = null;
    f2.textContent = null;
    input.textContent = null;
}
