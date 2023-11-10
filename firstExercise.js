// STEP1.   Make sure to create a repo called "My Javascript Journey" and link this folder with that repository.
//          You should not have any issues, if you are having issues, go back to the git note or ask your friend 
//          before asking your lecturer for help.(You cannot forget git commands)
// STEP2.   Every push to github must be to a branch and a pull request has to be made to merge the branch with main. 
//          Any pushes to main will result in you having to restart from the beginning(from creating a repo).
// STEP3.   Follow the order : 1 create repo, 2 run all commands necessary to link these to folders, 
//          3 create and work on branch, 4 push branch and use a pull request to merge. 5 PULL YOUR CODE TO LOCAL REPO BEFORE CREATING ANOTHER BRANCH
// STEP4.   You must link this javascript file to an index.html page, taking FOLDER STRUCTURE into consideration.

//INTO TO JAVASCRIPT EXERCISE

// A. TASK 1:VARIABLES and OPERATORS
// 1. Create a variable called “language” and assign it the value “JavaScript”. Then create
// a variable called “score” and assign it the value “10”.
    let language = 'JavaScript'
    console.log(language)
    let score = 10
    console.log(score)

// 2.Create two variables called “length” and “width”. Assign each variable a value of 10 and 5 respectfully. Use
// the variables to calculate the area of a rectangle with the length and width specified (remember area = length x width).
// Write the following to the console using CONCATENATION and BACKTICKS: 
// “The area of the rectangle is …” where … is the area you calculated.
 let length = 10
 let width = 5
 let area = length*width
 console.log( `The area of the rectangle is ` .concat(area))
 console.log( `The area of the rectangle is  $(area)`)

// 3.Create two variables called “num1” and “num2.” Assign each variable a value of 10 and 4 respectfully.
// Calculate and display in the console what the remainder is if num1 is divided by num2.
let num1 = 10 
let num2 = 4
let modulus = num1%num2
console.log(modulus)

// 4.Using the variables you created in the previous step, output the results
// of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks
console.log( num1+ ` / ` +num2+ ` = ` +modulus +` remainder ` +modulus )
//different option
let answer = Math.floor(10%4)
console.log(`${num1} / ${num2} = ${answer} remainder ${10%4}`)

// B. Task 2:Data Types
// 1. Define the following data types with your own contents[ 'integer', 'decimal', 'string', 'array'(minimum: 3 items), 'Object'(minimum: 4 values)]
let integer = 2
let decimal = 2.3
let string = "task2"
let array = ['variables', 'operator', 'data type' ]
const object = {
    name: 'calla' ,
    age: '20' ,
    number: '1234567'
}

// 2. Once you’ve created the variables, display them to the console
console.log(integer)
console.log(decimal)
console.log(string)
console.log(array)
console.log(object)

// 3. Use the ‘typeof’ function to check each variable
console.log(typeof(integer))
console.log(typeof(decimal))
console.log(typeof(string))
console.log(typeof(array))
console.log(typeof(object))


// 4. Create an array with numbers and strings. Comment what data type you expect this to be. Then use the ‘typeof’ function on this array
let numbers = [1 , 'two' , 3 , 'four' , 5]
//I think it will show number since the number is read first. 
console.log(typeof(numbers))

// 5. Create a null variable and an undefined variable
let task = undefined 
console.log(task)
let colour = null
console.log(colour)

// ***********C. Task 3. functions and contional statements************
// N.B. READ WITH UNDERSTANDING!!!
//  1.  Create 3 functions to convert R1000 into dollars, euros and pounds. Take function naming into consideration!
let rands= 1000

function toDollars() {
   return rands*0.054
  }
   console.log(`R1000 is ${toDollars()} Dollars`)

   function toEuros() {
    return rands*0.051
   }
    console.log(`R1000 is ${toEuros()} Euros`)
 
    function toPounds(pounds) {
        return rands*pounds
       }
        console.log(`R1000 is ${toPounds(0.041)} Pounds`)

       //different way to do it 
        function convertEuros(a,b){
          let answer = a*b
         //return answer
          //console.log(answer)
          
        } 
        convertEuros(1000,0.054)

        function convertPounds(a,b) {
          let answer = a/b
        }
        convertPounds(a,22.84)
        //tofixed allows you to round off to two decimals
 
//  2.  Create a function that takes a value and calculates the amount entered including VAT (15%), amount entered should be R400.
//      Then display the message in the console, "The amount after tax is ...".
let amount = 400
function calculate(value) {
    return amount*value+amount
   }
    console.log(`The amount after tax is ${calculate(0.15)}`)

    //different way
    function VAT() {
      let answer = 400*115/100
      let answer2 =400*0.15
      return answer2 + 400 
    }

//  3.  Declare 3 variables 1stNum, 2ndNum, 3rdNum and assign values of 8, 20 and 14 respectfully. Now write a function that compares “1stNum” and “2ndNum” and 
//      displays the larger value.
let firstNum = 8;
let secondNum = 20;
let thirdNum = 14;
function greaterOrSmaller(firstNum,secondNum) {
    if(firstNum>secondNum){
    console.log('firstNum is not greater' )
    }else{
        console.log('secondNum is greater  ' +secondNum ) 
    }
    
}
greaterOrSmaller(firstNum,secondNum);

//different way
//hoisting calling the code before giving function
display(firstNum,secondNum)
function display() {
  if (firstNum>secondNum) {
    console.log(firstNum);
  }else{
    console.log(secondNum);
  }
  
}

//  4.  Write a function that determines whether “1stNum” is odd or even and displays the
//      result. (Tip: remember the modulus operator %)
function even_or_odd(num){
    eo= num;
    if(eo % 2 ===0){
        console.log("even number")
    }else{
        console.log("odd number")

    }
}

even_or_odd(firstNum);

//diferent way
//=== checks data type and if numbers are equal
//conditional statement
function oddOrEven() {
  if (num1%2 ==0) {
    console.log("even number")
  }else{
    console.log("odd number")
  }
  
}

    
//  5.  Next, write a JavaScript conditional statement to sort the three numbers(1stNum, 2ndNum, 3rdNum) from largest to smallest.

function sortNumbersDescending(firstNum, secondNum, thirdNum) {
    if (firstNum > secondNum && firstNum > thirdNum) {
      if (secondNum > thirdNum) {
        console.log(`Sorted numbers: ${firstNum}, ${secondNum}, ${thirdNum}`);
      } else {
        console.log(`Sorted numbers: ${firstNum}, ${thirdNum}, ${secondNum}`);
      }
    } else if (secondNum >= firstNum && secondNum > thirdNum) {
      if (firstNum > thirdNum) {
        console.log(`Sorted numbers: ${secondNum}, ${firstNum}, ${thirdNum}`);
      } else {
        console.log(`Sorted numbers: ${secondNum}, ${thirdNum}, ${firstNum}`);
      }
    } else {
      if (firstNum > secondNum) {
        console.log(`Sorted numbers: ${thirdNum}, ${firstNum}, ${secondNum}`);
      } else {
        console.log(`Sorted numbers: ${thirdNum}, ${secondNum}, ${firstNum}`);
      }
    }
  }
  sortNumbersDescending(firstNum, secondNum, thirdNum)

  
  //name function : normal fucntion
  //function expression : declare function as a variable .. let display instead of function and then name
  //arguements are displayed in function name(argu)
 