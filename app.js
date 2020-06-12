// ASSIGNMENT NUMBER 1
// i
var TodayDate = new Date();
var DayTime = TodayDate.getHours();

if(DayTime < 12){
    alert("Good Morning")
}
else if(DayTime >= 12){
    alert("Good Afternoon")
}
else if(DayTime >= 18){
    alert("Good Evening");
}
else{
    alert("Good Night")
}

// ii
var user_input = prompt("Enter Your password");
if(user_input === "xyz"){
    alert("Correct Password")
}
else{
    alert("Error! Please enter a valid password");
}

// // iii
alert("Welcome to JS Land... \n Happy Coding")

iv
alert("Welcome to JS Land");
alert("Happy Coding");

// ASSIGNMENT NUMBER 2
// i
var username;
ii
var myName = "Ali Jawwad";
iii
var message = "Hello world";
iv
var age = 19;
var qual = "Certified Mobile Application Development";
alert(message)
alert(myName);
alert(age);
alert(qual);

// vi
var email = "alijawwad001@gmail.com";
var emailal = "My email address is " + email;
alert(emailal);

// vii
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// viii
document.write("Yah! I can write HTML content through JavaScript");

// ix
var emoji = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(emoji);

// ASSIGNMENT NUMBER 3 
// // i
var age = 18;
alert("I am" + age+ " years old");

// iii
var BirthYear = 2001;
document.write("My birth year is " + BirthYear + "  <br/> Data type of my declared birth year is  " +typeof(BirthYear))

// iv
var VisitorName = "John Doe";
var Product = " T-Shirts";
var ProductQuantity = 5;

document.write("<strong>" + VisitorName + "</strong> ordered  " + "<strong>" + ProductQuantity, Product +
    "</strong> on XYZ clothing store");

// ASSIGNMENT NUMBER 4
// i 
var a, b, c, d, e;
// ii
// Legal Variable
// var $myvar;
// var _myvar;
// var myvar;
// var myvar_;
// var my_var;

// Ilegal Variable
// var 1myvar;
// var -myvar;
// var ?myvar;
// var "myvar";
// a variable starting with any JavaScript built in Function

// iii
// a)
document.write("<h1>“Rules for naming JS variables</h1>")
// b)
document.write("Variable can contain <strong> numbers , strings and Data Types </strong> <br/>");
// c
document.write("Variables must be begin with <strong> $ sign , a underscore , a letter </strong> <br/>");
// d
document.write("Variables names are case <strong> sensitive </strong> <br/>");
// e
document.write("Variables should not be Js <strong> built in Function </strong> <br/><br/>");
document.write("<hr />");

// ASSIGNMENT NUMBER 5
var num_1 = 3
var num_2 = 5
var add = num_1 + num_2;
var subt = num_1 - num_2;
var mul = num_1 * num_2;
var modulus = num_1 % num_2;
document.write(" The sum of " + num_1 + " and " + num_2 + " is " + add + " <br/>");
document.write(" The subtraction of " + num_1 + " and " + num_2 + " is " + subt + " <br/>");
document.write(" The multiplication of " + num_1 + " and " + num_2 + " is " + mul + " <br/>");
document.write(" The modulus of " + num_1 + " and " + num_2 + " is " + modulus + " <br/><br/>");

// iii.
// a
var RandomVar;
document.write("Value after variable declaration is:" + RandomVar + "<br />")

// b
var Initvar = 5;
document.write(" Initial value: " + Initvar + "<br/>")
var IncVal = ++Initvar;
document.write(" Value after increment is: " + IncVal + "<br />");

// c
var addToIncVal = IncVal + 7;
document.write("Value after addition is " + addToIncVal + "<br />")

// d
var DecVal = addToIncVal - 1;
document.write(" The value after decrement is " + DecVal + "<br />");

// e
var FindRemainder = DecVal % 3;
document.write("The remainder is " + FindRemainder + "<br/><br/>");

// 4
var MovieTicket = 600;
document.write("Total cost to buy 5 tickets to a movie is " + MovieTicket * 5 + "PKR");
document.write("<hr />");

// 5
document.write("<h1>TABLE OF 4</h1>")
for (var table = 1; table <= 10; table++) {
    document.write("4 * " + table + " = " + 4 * table + "<br/>");
}
document.write("<hr />");

// 6
// i
var Celsius = 40;
var F = (Celsius * 9 / 5) + 32;
document.write(Celsius + "°C is " + F + " Ferhenite <br />");
// ii
var Ferhenite = 115;
var C = (Ferhenite - 32) * 5 / 9;
document.write(Ferhenite + " ferhenite is " + C + " celsius <br/> ");
document.write("<hr />");

// 7
document.write("<h1>SHOPPING CART</h1>");
var Item1 = 650;
var Item2 = 100;
var Quantity_Item1 = 3;
var Quantity_Item2 = 7;
var ShippingCharges = 100;

var Item1Total = Item1 * Quantity_Item1;
var Item2Total = Item2 * Quantity_Item2;
var TotalBill = Item1Total + Item2Total + ShippingCharges;
document.write("Total cost of your order is " + TotalBill);
document.write("<hr />");

// 8
document.write("<h1>MARKSHEET</h1>");
var MarksObt = 437;
var TotalMarks = 500;
document.write("Marks obtained are " + MarksObt + "<br />");
document.write("Total Marks are " + TotalMarks + "<br />");

var Percentage = MarksObt / TotalMarks * 100;
document.write("Percentage " + Percentage);
document.write("<hr />");

// 9
var ToPkr = 10 * 104.80 + 25 * 28;
document.write("Total Curreny in PKR is : " + ToPkr)
document.write(" <hr />");

// 10
var SomeVar = 8;
SomeVar = SomeVar + 5 * 10;
document.write("The answer after all the calculations is : " + SomeVar / 2)
document.write("<hr />");

// 11
var YearOfBirth = 2001;
var CurrentYear = new Date();
var GetYear = CurrentYear.getFullYear();
document.write("Current Year : " + GetYear + "<br/>")
var CurrentAge = GetYear - YearOfBirth;
document.write("Your age is : " + CurrentAge)
document.write("<hr/>")

// 12
document.write("<h1>The Geometrizer</h1>")
var r = 20;
var CircumferenceFormula = 2 * 3.14 * r;
// var Circumference = r * CircumferenceFormula; 
document.write("The Circumference of a circle is " + CircumferenceFormula + "<br/>")
var Area = 3.14 * r * r;
document.write("The area  is: " + Area)
document.write("<hr>")

//13
document.write("<h1>The Lifetime Supply Calculator</h1>")
var Snack = "Lays Chips"
document.write("Favourite Snack : " + Snack + "<br/>")
CurrentAge;
document.write("Current Age : " + CurrentAge + "<br/>")
var MaxAge = 65;
document.write("Estimated Age " + MaxAge + "<br/>")
var SnacksPerDay = 2;
document.write("Snacks per day : " + SnacksPerDay + "<br/>")
var MaxSnacks = MaxAge * SnacksPerDay;
document.write("You will need " + MaxSnacks + " " + Snack + " to last you untill the ripe old age of " + MaxAge)

document.write("<br/><br/><hr/> ");

// ASSIGNMET NUMBER 
// i
var i = 15;
document.write("The value of variable is " + i + "<br/>")

++i;
document.write("The value of ++i is" + i + "<br/>")
document.write("Now the value is " + i + "<br/> <br/>")

document.write("The value of i++ is " + i + "<br/>")
i++;
document.write("The value is now " + i + "<br/> <br/>");

--i;
document.write("The value of --i is " + i + "<br/>");
document.write("The value is now " + i + "<br/><br/>")


document.write("The value of i-- is " + i + "<br/>");
i--;
document.write("The value is now " + i + "<br/><br/>");

// ii
var a = 2
var b = 1
var result = --a - --b + ++b + b--;
document.write("1 - 0 + 1 + 1 <br/>");
document.write("a is " + a + " b is " + (++b + b--) + "<br/>")
document.write("The result is " + result)

// iii
var Greet = prompt("Your Name");
if(DayTime < 12){
    alert("Good Morning " + Greet)
}
else if(DayTime >= 12){
    alert("Good Afternoon " + Greet)
}
else if(DayTime >= 18){
    alert("Good Evening " + Greet);
}
else{
    alert("Good Night "  + Greet)
}

// v
document.write("<h1>MULTIPLICATION TABLE-</h1>")

var user_table = prompt("Enter table number");

if (user_table !== "") {
    for (var table = 1; table <= 10; table++) {
        document.write(user_table + " * " + table + " = " + user_table * table + "<br/>");
    }
}

if (user_table === "") {
    for (var table = 1; table <= 10; table++) {
        document.write("5 * " + table + " = " + 5 * table + "<br/> ");
    }
}

// vi
document.write("<strong>Subjects</strong> <br/>")
var subj1 = prompt("Subject 1");
var subj2 = prompt("Subject 2");
var subj3 = prompt("Subject 3");


document.write(subj1 + "<br/>");
document.write(subj2 + "<br/>");
document.write(subj3 + "<br/>");


document.write("<strong>Total Marks</strong> ")

var Total = 300;
document.write(Total + "<br/>")

document.write("<strong>Marks Obtain</strong>");
var MarkObtSubj1 = parseInt(prompt("Enter First Subject Marks"));
var MarkObtSubj2 = parseInt(prompt("Enter Second Subject Marks"));
var MarkObtSubj3 = parseInt(prompt("Enter Third Subject Marks"));

var ObtTotal =  MarkObtSubj1 + MarkObtSubj2 + MarkObtSubj3;
document.write(ObtTotal + " <br/>")

var per = ObtTotal / Total * 100 ;
document.write("<strong>Percentage</strong> is " + per);

document.write("<hr />")

// ASSIGNMENT 9-10
// i

var city = prompt("City?");
if(city === "karachi"){
    alert("Welcome to city of lights");
}

// ii

var Gender = prompt("Gender?");
if(Gender === "male"){
    alert("Good Morning Sir")
}
else{
    alert("Good Morning Mam")
}

// iii 

var SignalColor = prompt("Enter signal color")
if(SignalColor === "red"){
    alert("Must Stop!")
}
else if(SignalColor == "yellow"){
    alert("Ready to move")
}
else if(SignalColor === "green"){
    alert("Move now")
}

// iv

var fuel = parseInt(prompt("How much fuel is left in your car?"));
if(fuel <= 0.25){
    alert("Please refill the fuel in your car");
}

// v

var a = 4;
if(++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// v

document.write("<h2> MarkSheet </h2>")
var AllOverMarks = 300;
var Subject1 = parseInt(prompt("First Subject Mark"));
var Subject2 = parseInt(prompt("Second Subject Mark"));
var Subject3 = parseInt(prompt("Third Subject Mark"));

var MarksInTotal = Subject1 + Subject2 + Subject3;
var percentage = MarksInTotal / AllOverMarks * 100;

document.write("Total Marks :" + AllOverMarks + "<br/>");
document.write("Marks Obtain :" + MarksInTotal + "<br/>");
document.write("Percentage :" + percentage + "<br/>");

if(percentage >=80){
    var grade = "A-one";
    var Remarks = "Excellent";
}
else if (percentage >= 70){
    var grade = "A";
    var Remarks = "Good";
}
else if(percentage >= 60){
    var grade = "B";
    var Remarks = "Need to improve";
}
else {
    var grade = "C";
    var Remarks = "Fail";
}
document.write("Grade : " + grade + "<br/>");
// document.write("Remark : " + Remarks + "<br/>");

// vii

var SecretVariable = 4;
var guess = parseInt(prompt("Guess the secret number"));
if(SecretVariable === guess){
    alert("Bingo! Correct answer")
}
else if(guess === ++SecretVariable){
    alert("Close enough to the correct answer")
// }

// viii

var DivideBy3 = parseInt(prompt("Check whether the number is divisible by 3"))
if( DivideBy3 % 3 === 0 ){
    alert("Yes the number is divisible by three");
}

// ix
var CheckEven = prompt("Check whether the number is Even or Odd");
if(CheckEven % 2 === 0){
    alert("Even")
}
else{
    alert("Odd");
}

// x
var T = prompt("Enter Temperature");
if(T > 40){
    alert("Its to hot outside")
}
else if(T > 30){
    alert("The weather today is normal")
}
else if(T > 20){
    alert("Todays weather is cool")
}
else if(T > 10){
    alert("Omg Its cold")
}

document.write("<hr />")

// ASSIGNMENT NUMBER 12-13
// ii

var IntOne = prompt("Integer One")
var IntTwo = prompt("Int Two")

if(IntOne > IntTwo){
    document.write("Int One is larger")
}
else if(IntOne < IntTwo){
    document.write("Int two is larger")
}
else if(IntOne == IntTwo){
    document.write("Both are equal <br/>")
}

// iii 

var CheckNumber = prompt("Enter Number")
if( CheckNumber == 0){
    document.write("Number is zero")
}
else if(CheckNumber >=1){
    document.write("Number is positive")
}
else if(CheckNumber < 0){
    document.write("Number is negative")
}

// iv

var CheckVowel = prompt("Check Vowel?")

var vowel = ["a" , "e" , "i" , "o" , "u"];

for(var v = 0; v <= vowel.length; v++){

    if(CheckVowel == vowel[v]){
        document.write(CheckVowel + " is a vowel")
    }
}

// v

var CorrectPass = "worldcup"
var EnterPass = prompt("Enter Password")
if( EnterPass === ""){
    alert("Please enter your password")
}
else if(EnterPass === CorrectPass){
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect password")
}

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
document.write(greeting + "<br/>");


// vii

var dt = new Date();
var hours = dt.getHours();

var minutes = dt.getMinutes();

if (hours >= 00 && minutes == 00 || hours < 12 || minutes < 00) {
    document.write("Good Morning")
}
else if (hours >= 12 && minutes == 00 || hours < 17 || minutes < 00) {
    document.write("Good AfterNoon")
}
else if (hours >= 17 && minutes == 00 || hours < 21 || minutes < 00) {
    document.write("Good Evening")
}
else if (hours >= 21 && minutes == 00 || hours < 23 || minutes < 59) {
    document.write("Good Night")
}
document.write("<hr />")

// ASSIGNMENT NUMBER 13-15

//i 
// JS literal Notation
var StudentName = {}

// ii
// JS Object Notation
var StudentName = []

// iii
var StringArray = ["apple", "banana", "cherry"]

// iv
var NumberArray = [1, 2, 3, 4, 5, 6]

// v
var BooleanArray = [true, false]

// vi
var MixedArray = ["Denmark", true, 10]

// vii 
var Qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
document.write("<h1>QUALIFICATIONS</h1>")

document.write("1) " + Qual[0] + "<br/>")
document.write("2) " + Qual[1] + "<br/>")
document.write("3) " + Qual[2] + "<br/>")
document.write("4) " + Qual[3] + "<br/>")
document.write("5) " + Qual[4] + "<br/>")
document.write("6) " + Qual[5] + "<br/>")
document.write("7) " + Qual[6] + "<br/>")
document.write("8) " + Qual[7] + "<br/> <br/>")

//viii
var StdName = ["Micheal", "John", "Tony"]
var StdScore = [320, 230, 480]
var TM = 500
document.write("Score of " + StdName[0] + " is " + StdScore[0] + ". Percentage " + (StdScore[0] / TM * 100) + "% <br/>");
document.write("Score of " + StdName[1] + " is " + StdScore[1] + ". Percentage " + (StdScore[1] / TM * 100) + "% <br/>");
document.write("Score of " + StdName[2] + " is " + StdScore[2] + ". Percentage " + (StdScore[2] / TM * 100) + "% <br/><br/>");

// ix

var color = ["red" , "green"]
var AddColor = prompt("Add color at the beginning")

var BegColor = color.unshift(AddColor);

var ColorAtEnd = prompt("Add color at end")
var EndColor = color.push(ColorAtEnd)

var AddThird = prompt("Add at beginning");
var FirstColor = color.unshift(AddThird)

var AddFourth = prompt("Add at beginning again");
var SecondColor = color.unshift(AddFourth)

var RemoveFirstItem = color.shift();
var RemoveLastItem = color.pop();


for(let colors of color){
    document.write(colors + ", ");
}


// x

var Std_Score = [115, 235, 954, 456, 555];
for (let Std_Scores of Std_Score) {
    document.write(Std_Scores + " ")
}

document.write("<br/>")

var Asc = Std_Score.sort()
document.write("Ordered Sequence : " + Asc + " <br/><br/>");

// xi
var CitiesName = ["Karachi", "Lahore", "Islamabad" , "Peshawar" , "Quetta" , "Multan" , "Larkana"]
var CopyArr = CitiesName.slice( 2 , 4);  
document.write("<strong>Cities list </strong>" + CitiesName + "<br/>")
document.write( "<strong> Selected Cities</strong> " +CopyArr + "<br/> <br/>")

// xii

var Pet = ["This" , "is" , "my" , "Cat"];
var Join = Pet.join( " " );
document.write(Join + "<br/> <br/>")

// xiii
var Devices = ["keyboard" , "mouse" , "printer" , "monitor"]
document.write(" Out: <br/>" + Devices[0] + "  <br/>");
document.write(" Out: <br/>" + Devices[1] + "  <br/>");
document.write(" Out: <br/>" + Devices[2] + "  <br/>" );
document.write(" Out: <br/>" + Devices[3] + "  <br/> <br/>");

// // xiv
document.write(" Out: <br/>" + Devices[3] + "  <br/>");
document.write(" Out: <br/>" + Devices[2] + "  <br/>");
document.write(" Out: <br/>" + Devices[1] + "  <br/>" );
document.write(" Out: <br/>" + Devices[0] + "  <br/>");