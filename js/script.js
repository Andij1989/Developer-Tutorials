function buttonAction() {
    document.getElementById("textChange").innerHTML = "Dieser Text wurde verändert!";
}
function iconChange() {
    document.getElementById("thumb").className = "fas fa-thumbs-down";
    document.getElementById("thumb").style = "color: red;";
}
function imageChange() {
    document.getElementById("arrow").src = "images/down.png";
}
var a, b, c;
a = 1;
b = 2;
c = a + b;
document.getElementById("name").innerHTML = c;



var person = {
    name : "Andreas",
    age : 29,
    eyes : "grüne",
}

document.getElementById("object").innerHTML = typeof person.name ;

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
document.getElementById("function").innerHTML = fullName("Andreas", "Jeske") ;

function dm(euro) {
    return euro + " Euro sind " + 1.95583 * euro + " deutsche Mark!";
}
document.getElementById("euro").innerHTML = dm(5.00);

var human = {
    firstName : "Andreas",
    lastName : "Jeske",
    fullName : function () {
        return this.firstName + " " + this.lastName
    }
};
document.getElementById("fullName").innerHTML = human.fullName();

function showDate() {
    document.getElementById("date").innerHTML = Date();
}