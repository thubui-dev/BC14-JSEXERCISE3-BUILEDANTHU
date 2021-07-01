// EXERCISE 1

// INPUT
// Input 3 integers in the blank

// PROCESS
function arrangeNumber() {
    var numberFirst = parseInt(document.getElementById("numberFirst").value);
    var numberSecond = parseInt(document.getElementById("numberSecond").value);
    var numberThird = parseInt(document.getElementById("numberThird").value);
    var temp = 0;    
    if (numberFirst >= numberSecond) {
        temp = numberFirst;
        numberFirst = numberSecond;
        numberSecond = temp;
    }
    if (numberFirst >= numberThird) {
        temp = numberFirst;
        numberFirst = numberThird;
        numberThird = temp;
    }    
   if (numberSecond >= numberThird) {
        temp = numberSecond;
        numberSecond = numberThird;
        numberThird = temp;
   }
   
//OUTPUT:
    console.log("Sort orders use an ascending", numberFirst,numberSecond, numberThird);

    var divDemo = document.getElementById("demo");
    divDemo.innerHTML = "";
    var pTitle = document.createElement("p");
    pTitle.innerHTML = "Sort orders use an ascending:";
    var pNumber1 = document.createElement("p");
    pNumber1.innerHTML =  numberFirst;
    var pNumber2 = document.createElement("p");
    pNumber2.innerHTML =  numberSecond;
    var pNumber3 = document.createElement("p");
    pNumber3.innerHTML =  numberThird;
    divDemo.appendChild(pTitle);
    divDemo.appendChild(pNumber1);
    divDemo.appendChild(pNumber2);
    divDemo.appendChild(pNumber3);  
}

// EXERCISE 2 

//INPUT
// Choose 1 of 4 members in family

//PROCESS
function sayHello () {
    var member = document.getElementById("member").value;
    
// OUTPUT
    console.log(member);

    var divDemo2 = document.getElementById("demo2");
    divDemo2.innerHTML = "Greeting " + member;
   
}

// EXERCISE 3

//INPUT
// Input 3 integers in the blank

//PROCESS
var sumEven = 0;
var sumOdd = 0;

function isEven(num) {
    if (num % 2 == 0){
        sumEven = sumEven + 1;
    } else {
        sumOdd = sumOdd + 1;
    }
}

function sortNumber(numberOne, numberTwo, numberThree) {
    sumEven = 0;
    sumOdd = 0;
    var numberOne = document.getElementById("numberOne").value;
    var numberTwo = document.getElementById("numberTwo").value;
    var numberThree = document.getElementById("numberThree").value;
    
    isEven(numberOne)
    isEven(numberTwo)
    isEven(numberThree)

//OUTPUT
    console.log('Even:', sumEven);
    console.log('Odd:', sumOdd);

    var divDemo3 = document.getElementById("demo3");
    divDemo3.innerHTML = "";
    var pTitle3 = document.createElement("p");
    pTitle3.innerHTML = "Even:"+ sumEven;
    var pTitle4 = document.createElement("p");
    pTitle4.innerHTML = "Odd:"+ sumOdd;
    divDemo3.appendChild(pTitle3);
    divDemo3.appendChild(pTitle4);     
}

// EXERCISE 4

//INPUT
// Input 3 sides of triangle

//PROCESS
function checkTriangle() {
    var side1a = document.getElementById("side1a").value;
    var side2b = document.getElementById("side2b").value;
    var side3c = document.getElementById("side3c").value;
    var printTriangle;

//OUTPUT
    if((side1a == side2b) && (side2b == side3c)) {
        console.log("Equilateral triangle");
        printTriangle = "Equilateral triangle";
    } else if ((side1a * side1a + side2b * side2b == side3c * side3c) || (side1a * side3c + side3c * side3c == side2b * side2b) || (side2b * side2b + side3c * side3c == side1a * side3c)) {
        console.log("Right triangle");
        printTriangle = "Right triangle";        
    } else if ((side1a == side2b) || (side1a == side3c) || (side2b == side3c)) {
        console.log("Isosceles triangle");
        printTriangle = "Isosceles triangle";
    } else if (side1a + side2b > side3c || side1a + side3c > side2b || side2b + side3c > side1a) {
        console.log("Triangle");
        printTriangle = "Triangle";
    } else {
        console.log("Error");
        printTriangle = "Error";
    }

    var divDemo4 = document.getElementById("demo4");
    divDemo4.innerHTML = "Result:" + printTriangle;

}
