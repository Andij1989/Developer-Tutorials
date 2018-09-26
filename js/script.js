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

var number = 1.1;
var txt ="";
while (number != Infinity) {
    number = number * number;
    txt= txt + number + "<br>";
}
document.getElementById("infinity").innerHTML = txt;

function numbers(myNumber) {
   return   "Binär " + myNumber.toString(2) + "<br>" +
            "Octal " + myNumber.toString(8) + "<br>" +
            "Decimal " + myNumber.toString(10) + "<br>" +
            "Hexadecimal " + myNumber.toString(16);
}
document.getElementById("bi").innerHTML = numbers(512);

var cars = ["BMW", "VW", "Audi"];

document.getElementById("array").innerHTML = cars[2];

var fruits = ["Zitrone", "Apfel", "Banane", "Erdbeere", "Kiwi"];
fruits.push("Lemon");
fruits.sort();
var flen = fruits.length;
var txt = "<ul>";
    for (i = 0; i < flen; i++) {
    txt += "<li>" + fruits[i] + "</li>";
    }
    txt += "</ul>";
fruits.push("Lemon");

document.getElementById("for").innerHTML = txt;

var names = ["Andi", "Tom", "Sam", "Ann"];
var txt1 = "<ul>";
names.forEach(loopFunction);
txt1 += "</ul>";

function loopFunction(wert) {
    txt1 += "<li>" + wert + "</li>";
}
document.getElementById("each").innerHTML = txt1;

fruits.push("Lemon");

var points = [100, 50, 20, 2000, 7, 25, 1, 2010];
document.getElementById("max").innerHTML = getMax(points);

function getMax(arr) {
    return Math.max.apply(null, arr);
}

var cars = [
    {type : "VW", year : 2018},
    {type : "BMW", year : 2016},
    {type : "Benz", year : 2014}
];
displayCars();

function myFunction() {
    cars.sort(function(a, b){return a.year - b.year});
    displayCars();
}
function displayCars() {
    document.getElementById("display").innerHTML =
        cars[0].type + " " + cars[0].year + "<br>" +
        cars[1].type + " " + cars[1].year + "<br>" +
        cars[2].type + " " + cars[2].year;;
}

var zahlen1 = [2, 4, 6, 8, 10, 12];
var zahlen2 = zahlen1.map(verdoppeln);

function verdoppeln(value, index, array) {
    return value * 3;
}

document.getElementById("doppel").innerHTML = zahlen2;

var zahlen3 = zahlen2.reduce(summiert);

document.getElementById("summe").innerHTML = zahlen3;

function summiert(total, value) {
    return total + value;
}

var tag = new Date(608438000000);
document.getElementById("tag").innerHTML = tag.toUTCString();



var acye = new Date();
document.getElementById("jahr").innerHTML = acye.getFullYear();


var d = new Date();
d.setTime(608438000000);
var monat = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

document.getElementById("monat").innerHTML = monat[d.getMonth()];

var t = new Date();
var wtag = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

document.getElementById("wtag").innerHTML = wtag[t.getDay()];

var radius = 5;
function fläche(radius) {
    return (radius * radius) * Math.PI;
}

document.getElementById("fläche").innerHTML = "Ein Kreis mit dem Radius von " + radius + "cm" + " hat eine Fläche von ca. " + Math.round(fläche(radius)) + "cm^2.";









