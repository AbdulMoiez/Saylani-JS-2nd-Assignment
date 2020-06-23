/*

// Chapter 21-25
/!*
//1 & 6. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable.

var first_Name = prompt("Enter Your First Name.");
var last_name = prompt(" Enter your last Name.");

var full_Name = first_Name + last_name;

document.write(" Welcome "+ full_Name);*!/


/!*
//2. Write a program to take a user input about his favorite mobile phone model.

var mobile_Model = prompt("Please Enter your Favorite Mobile Model.");

document.write("Lenght of String: " + mobile_Model.length);*!/

/!*
//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var country = "Pakistan";
document.write("Index of n: " + country.indexOf('n'));*!/

/!*
//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var  text = "Hello World";
document.write("The index of l: " + text.indexOf('l'));*!/

/!*!//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browse.

var country = "Pakistan";
document.write( "Character at index 3: " + country./!*
//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var change = "hyderabad";
change= change.slice(5,10);
document.write("Islam"+ change);*!/

/!*
//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together.";
 message1 = message.replace(/and /g , " & ");
 document.write(message1);*!/

/!*
//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var value = "472";
document.write("Value: " +value + "<br>");
document.write("Type: " + typeof value + "<br>");

value = Number(value );
document.write("Value: "  + value + "<br>");
document.write("Type: " + typeof value + "<br>");*!/

/!*
//10. Write a program that takes user input. Convert and show the input in capital letters.
var user_Input = prompt("Please enter any Letter.");
document.write("User Input: " + user_Input + "<br>");
user_Input = user_Input.toUpperCase();
document.write("Upper Case: " + user_Input);*!/

/!*!//11. Write a program that takes user input. Convert and show the input in title case.

var name = prompt("Please Enter your Title name.");
name1 = name.slice(0,1);
name1 = name1.toUpperCase();
name2 = name.slice(1);
name2 = name2.toLowerCase();
document.write("<h1>"+ "<b>" + name1+name2 +"</b>"+"<h1>");*!/

/!*
//12. Write a program that converts the variable num to string.

var num = 35.36 ;
document.write("Number: " + num + "<br>")
num2 = num.toString();
num1 = num2.replace('.',"")
document.write("Result: "+ num1 + "<br>" + "Type: " + typeof num1);*!/

/!*
//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !],
// I do the above question through function ;


function check(inputvalue) {
    var a = /^[A-Za-z]+$/;
if (inputvalue.value.match(a)){
    alert("Your Username Recoded Successfully")
}
else {
    alert("Please enter a valid Username.")
}
}*!/

/!*
//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
var A = ["cake", "apple pie", "cookie", "chips", "patties"] ;
 var user_Input = prompt("Welcome to Master bakery. What do you want to order sir/ma'am") ;

 user_Input = user_Input.toLowerCase();

 if (user_Input === A[0]){
     document.write("<b>" + "Branch Matches to Array" + "</b>");
 }
else  if (user_Input === A[1]){
     document.write("<b>" + "Branch Matches to Array" + "</b>");
 }
 else  if (user_Input === A[2]){
     document.write("<b>" + "Branch Matches to Array" + "</b>");
 }
 else  if (user_Input === A[3]){
     document.write("<b>" + "Branch Matches to Array" + "</b>");
 }
 else  if (user_Input === A[4]){
     document.write("<b>" + "Branch Matches to Array" + "</b>");
 }
 else{
     document.write("We are sorry."+ user_Input + "is not available in our bakery")
 }
*!/

/!*
//15. Write a program to take password as an input from user. The password must qualify these requirements:

function alphanumeric(inputtxt)
{
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if(inputtxt.value.match(letterNumber))
    {
        return true;
    }
    else
    {
        alert("message");
        return false;
    }
}*!/

/!*
//16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”;
var university = "University of Karachi";
university = university.split("");
document.write(university);*!/

/!*

//17. Write a program to display the last character of a user input.
 var input = "Pakistan";
 var input1=input.charAt(7);
 document.write(input1);
*!/

/!*
//18.You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var string = "The quick brown fox jumps over the lazy dog";
for (i = 0; i<string.length; i++){
    document.write(i+string[i])
}*!/


*/

/*

// Chapter 26-30
/!*

//1. Write a program that takes a positive integer from user & display the following in your browser.
var user_Input = prompt("Please Enter any Float Number.");

var user_Input1 = Math.round(user_Input);
document.write("Round: " +user_Input + "<br>");
var user_Input2 = Math.floor(user_Input);
document.write( "Floor: "+user_Input2 + "<br>");

var user_Inout3 = Math.ceil(user_Input);
document.write( "Ceil: "+user_Inout3 + "<br>");
*!/

/!*
//2. Write a program that takes a negative floating point number from user & display the following in your browser.
var user_Input = prompt("Please Enter a Negative Floor Number.");
var user_Input1 = Math.round(user_Input);
document.write("Round: " +user_Input + "<br>");
var user_Input2 = Math.floor(user_Input);
document.write( "Floor: "+user_Input2 + "<br>");

var user_Inout3 = Math.ceil(user_Input);
document.write( "Ceil: "+user_Inout3 + "<br>");*!/

/!*

//3. Write a program that displays the absolute value of a number.

var  user_input = prompt("Please Enter a Number.");
user_input1 = user_input.slice(1);
var user_input2 = user_input.charAt(0);
if (user_input2 === '-'){
    document.write(user_input1);
}
else if (user_input2 !== '-'){
    document.write(user_input)
}*!/

/!*
//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser..

var Dice_Number = Math.random();
var new_Number = Dice_Number *6;
var One_Digit = Math.floor(new_Number);
document.write(One_Digit);*!/

/!*!//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser..
var random_Number = Math.random();
var new_number = random_Number * 6;
var floor_Value = Math.floor(new_number) ;

if (floor_Value <= 3){
    document.write(floor_Value + "<br>" + "Random Coin value: Heads");
}
else if (floor_Value >= 3){
    document.write(floor_Value + "<br>" + "Random Coin value: Tails")
}*!/

/!*
//6. Write a program that shows a random number between 1 and 100 in your browser.

var random_Number = Math.random();
var new_number = random_Number * 100;
var floor_Value = Math.floor(new_number) ;
document.write("Random number between 1 and 100: " + floor_Value );*!/

/!*
//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number.

var user_Input = prompt("Please Enter a Secret number from1 to 10 ");

var secret_Number = 7;

if (user_Input == secret_Number){
    document.write("Congratulate you type the Correct Secret number ")
}
else if (user_Input != 7){
    document.write("Wrong Answer! Try Again");
}*!/

*/


/*
// Chapter 31-34

/!*
 //1. Write a program that displays current date and time in your browser.

var date = new Date();
document.write(date);*!/


/!*!// 2. Write a program that alerts the current month in words. For example December.
var month_names = ["January", "February", "March", "April", "May","June","July","August", "September", "October", "November", "December"];
var month = new Date();
var the_Month = month.getMonth();
var present_month = month_names[the_Month];
document.write("Current Month: " + present_month);*!/


/!*
//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
document.write("Current Day: " + nameOfToday);*!/


/!*
//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if (theDay == 0 || theDay == 6){
    document.write("It's Fun day");
}
else {
    document.write("It's Working Day");
}
document.write("<br>" + "Current Day: " + nameOfToday);*!/

/!*
//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var first15_Days = new Date();
var today = first15_Days.getDay();
if (today <= 15)
for (today =  first15_Days.getDay(); today <16; today++){
    document.write(today)
}
else if (today >= 16) {
    for (today = first15_Days.getDay(); today < 31; today++) {
        document.write(today)
    }
}*!/

/!*
//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that....

var d = new Date();
document.write("Current Data: " + d);

var d = new Date("1970 1 1");
var millsSince = d.getTime();
document.write("<br>" + "Elapsed millisecond since Jan.1,1970: " + millsSince);

var d = new Date("January 1 1970");
var mintsSince = d.getMinutes();
document.write("<br>" + "Elapsed minutes since Jan.1,1970: " + mintsSince);*!/

/!*
//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var d = new Date();
document.write(d + "<br>");
var time = d.getHours();
if (time <=12   ){
    document.write(time + " Am.")
}
else if (time >=12.59000 || time <= 23.59000)
document.write(time + " PM.");*!/

/!*
//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var LastDate = new Date("2020 12 31");
document.write(LastDate);*!/

/!*!//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?


const date1 = new Date('4/25/2020');
const date2 = new Date('2/22/2020');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.write(diffDays + " days have passed since 1st Ramadan, 2020");*!/

/!*
//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

var d = new Date();
document.write("On reference date " + d);
const date1 = new Date('1/01/2020');
const date2 = new Date('6/22/2020');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const seconds = diffDays * 86400;
document.write("<br>" + seconds + " seconds had passed since beginning of 2020");
*!/

/!*!//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display

var d = new Date();
document.write("Current Date: " + d + "<br>");
var hour = d.setHours(22);
document.write("1 hour ago: " + d + "<br>");*!/

/!*!//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var d = new Date();
document.write(d + "<br>" );

d.setFullYear(d.getFullYear() - 100);
document.write(d);*!/

/!*!//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var user_Date = prompt("Please Enter your Data.");
document.write("Your age is: " + user_Date + "<br>");
var d = new Date();
var user_Year = d.getFullYear() - user_Date;
document.write("Your Birth year is: " + user_Year);*!/

/!*
//14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places.

var customer_Name = "Abdul Moiez Irbaz";
document.write("Customer Name: " +  "<b>" +customer_Name + "</b>" + "<br>" );
var d = new Date();
var month_Name = ["January", "February", "March", "April", "June", "July","August", "September", "October", "November", "December"];
var Month_index = d.getMonth();
var Bill_Month = month_Name[Month_index];
document.write("Current Month:" + "<b>" + Bill_Month + "</b>" + "<br>");

var Number_unit = 410;
document.write("Number of units: " + "<b>" + Number_unit +"</b>" + "<br>");
var Charge_Unit = 16;
document.write("Charges per units: " + "<b>"+ Charge_Unit +"</b>" + "<br>");
document.write("<br>"+"<br>");

var Net_amount =  + Number_unit * Charge_Unit;
document.write( " Net Amount Payable (within Due Date): " + "<b>"+ Net_amount +"</b>" + "<br>");
var Late_payment = 350;
document.write("Late Payment Surcharges: " +"<b>" + Late_payment + "</b>"  + "<br>" );
var Gross_amount = Net_amount + Late_payment;
document.write("Gross Amount Payable (after Due Date): " + "<b>" + Gross_amount + "</b>");*!/
*/

/*// Chapter 35-38

/!*
//1. Write a function that displays current date & time in your browser.

function date() {
var d = new Date();
document.write(d);
}
date();*!/

/!*
//2. Write a function that takes first & last name and then it greets the user using his full name.
function Greeting() {
var first_Name =prompt("Enter your First Name");
var Second_Name = prompt("Enter your Last Name");
document.write("Welcome! " + first_Name + Second_Name);
}
Greeting();*!/

/!*
//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function adding() {
var first_Number =  prompt("Please Enter a First Number to Add");
    var second_Number = prompt("Please Enter a Second Number to Add");

    document.write(parseInt(first_Number) + parseInt(second_Number));

}
adding();*!/

/!*
//4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

function calculator() {
    var num1 =parseInt( prompt("Enter First Number to get Result") );
    var operator =prompt("Enter a Operator to get Result" );
    var num2 =parseInt( prompt("Enter Second Number to get Result") );

    if (operator == '+' ){
        document.write(num1 + num2)
    }
    else if (operator == '-' ){
        document.write(num1 - num2)
    }
    else if (operator == '*'  ){
        document.write( num1  * num2)
    }
    else if (operator == 'x' ){
        document.write(num1 * num2)
    }
    else if (operator == '/' ){
        document.write(num1 / num2)
    }
    else{
        alert("Please Enter a Valid Argument or Operator")
    }
}




calculator();*!/*/

