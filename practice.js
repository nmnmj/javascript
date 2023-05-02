window.alert("hello");
let username = window.prompt("enter useer name:-");
console.log(username);
document.getElementById("mbutton").innerHTML= username;
let a = 21;
document.getElementById("p1").innerHTML = a+1 +" is your age";
console.log(a+1);
let usernames;
document.getElementById("mbutton").onclick = function(){
    usernames = document.getElementById("mtext").value;
    console.log(usernames);
    document.getElementById("mlabel").innerHTML=usernames;
}
console.log(typeof username);
username=Number(username);
console.log(typeof username);
x=Number("pizza");
console.log(typeof x);
r= window.prompt("enter the value of radius");
r=Number(r);
const pi=3.14;
circumference = 2*pi*r;
console.log("circumference=", circumference);