// Question # 1
document.write("<h1>Question # 1</h1>")

var City = prompt("Enter Your city Name")
if(City == "karachi"){
    alert("welcome to  city of light")
    document.write("welcome to  city of light")
}else{
    alert ("welcome")
    document.write("welcome")

}


// Question # 2
document.write("<h1>Question # 2</h1>")

var Gender = prompt("Enter Your Gender")

if(Gender == "male"){
    alert("Good Morning Sir")
}
else if (Gender == "female"){
    alert("Good Morning ma'am")
}
else if (Gender == "Other"){
    alert("Good Morning")
}
else(
    alert("Enter male,female or other")
)

 // Question # 3
document.write("<h1>Question # 3</h1>")
var color = prompt("Enter color of road traffic signal (red,Yellow,green)")
if(color == "red"){
    alert("Must Stop")
}
else if (color == "Yellow"){
    alert("Ready to move")
}
else if (color == "green"){
    alert("Move now")
}else{
    alert("place Enter Any one from red, yellow or green")
}

// Question # 4
 document.write("<h1>Question # 4</h1>")

 var currentFuel = prompt ("Enter remaining fuel in car in litres")

 if ( currentFuel < 0.25){
    alert("Please refill the fuel in your car")
 } else{
    alert("You will receive a message if the fuel is less than 0.25 liter")
 }



// Question # 5
document.write("<h1>Question # 5</h1> " + "<br>")

document.write("Code a is displayed " + "<br>")
document.write("Code b is Not  displayed "+ "<br>")
document.write("Code c condition 2 is true "+ "<br>")
document.write("Code d is displayed "+ "<br>")
document.write("Code e is displayed "+ "<br>")
document.write("Code f is displayed "+ "<br>")



// // // Question # 6
document.write("<h1>Question # 6</h1>"  + "<br>")
document.write("<h1>Marks Sheet</h1> " + "<br>")

var totalMarks = prompt("Enter Your Total Marks"  )
var marksObtainedEnglish = +prompt("Enter Your English Obtained Marks")
var marksObtainedUrdu = +prompt("Enter Your Urdu Obtained Marks")
var marksObtainedMath = +prompt("Enter Your Math Obtained Marks")

var  totalObtmarks =  marksObtainedEnglish + marksObtainedUrdu + marksObtainedMath
document.write("totalMarks" + "=" +   totalMarks + " <br>" )
document.write("MarksObtainrd" + "=" +  totalObtmarks + " <br>")


var percentage = (totalObtmarks /  totalMarks) * 100
document.write("perrentage" + "=" +  percentage  + " <br>")

if(percentage >= "80" && percentage < "101"){
        document.write("Grade = " + "A.one" + " <br>")
        document.write("Remarks = " + "Excellent" + " <br>")
}

else if(percentage >= "70" && percentage < "80"){
            document.write("Grade = " + "A" + " <br>")
            document.write("Remarks = " + "Good"  + " <br>")
            } 

        else if(percentage >= "60" && percentage < "70"){
            document.write("Grade = " + "B")
            document.write("Remarks =" + "You Need To Improve")
            }  

          else if(percentage >= "50" && percentage < "60"){
            document.write("Grade = " + "C" + "<br>")
            document.write("Remarks = " + "You Need Hard working")
            }

        else{
        document.write("Grade = " + "Fail" +"<br>")
        document.write("Remarks = " + "Sorry")
        }


// Question # 7
document.write("<h1>Question # 7</h1>"  + "<br>")


var guessNum = prompt( "Enter a Number ranging from 1 to 10 ")
if (guessNum ==4) {
    alert("Correct answer")
} else if (guessNum > 2 && guessNum < 6 ){
    alert("Close enough to the correct answer")
} else {
    alert( "Try agian")
}


// Question # 8
document.write("<h1>Question # 8</h1>"  + "<br>")

var checkNum = prompt("check the number that is divisible by 3") 

if(checkNum%2 ===0){
    alert("This Number is divisible by 3")
}
 else{
   alert("This Number is Not  divisible by 3")
}


// Question # 9
document.write("<h1>Question # 9</h1>"  + "<br>")

var number=prompt("Enter Your Number")

if(number%2 ===0){
    alert("This Number is even")
}
 else{
   alert("This Number is odd")
}


// Question # 10
document.write("<h1>Question # 10</h1>"  + "<br>")

var Weather = prompt("Enter today's temperature (40 ,30 ,20, 10)")
if (Weather == 40){
    alert("It is too hot outside")
} else if (Weather == 30){
    alert("The Weather today is Normal")
}else if (Weather == 20 ){
    alert("Today’s Weather is cool")
}else if (Weather == 10  ){
    alert("OMG! Today’s weather is so Cool")
} else{
    alert("place Enter 10 , 20, 30 ,or 40")
}

// Question # 11
document.write("<h1>Question # 11 calculator</h1>"  + "<br>")

var firstNumber = +prompt ( "Enter Your First number for calculation" )
var secondNumber = +prompt ( "Enter Your Second number for calculation" )
var Operation = prompt ("Enter You Operation for calculation (+, -, *, /, & %)")

if ( Operation == "+" ){
    alert (firstNumber + secondNumber )
}else if ( Operation == "-" ){
    alert (firstNumber - secondNumber )
}else if ( Operation == "/" ){
    alert (firstNumber / secondNumber )
}else if ( Operation == "*" ){
    alert (firstNumber * secondNumber )
}else if ( Operation == "%" ){
    alert ((firstNumber * 100 ) / secondNumber )
} else{
    alert("place Enter this Operation (+, -, *, /, & %)")
}
