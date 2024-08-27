

const firstNumber = 6;
const secondNumber = 3;
let operation = "-";

let checkFaultyTime = Math.random();

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**"
};

const myfun = ()=>{

    
    if (checkFaultyTime > 0.1) {
  if (operation == "+") {
    console.log(firstNumber + secondNumber);
  } else if (operation == "-") {
    console.log(firstNumber - secondNumber);
  } else if (operation == "*") {
      console.log(firstNumber * secondNumber);
    } else if (operation == "/") {
    console.log(firstNumber / secondNumber);
  } else {
    console.log("Invalid operation");
}
} else {
    operation = obj[operation];
    if (operation == "+") {
        console.log(firstNumber + secondNumber);
  } else if (operation == "-") {
    console.log(firstNumber - secondNumber);
  } else if (operation == "*") {
      console.log(firstNumber * secondNumber);
  } else if (operation == "/") {
    console.log(firstNumber / secondNumber);
} else {
    console.log("Invalid operation");
}
}

}

for (let index = 0; index < 10; index++) {

    myfun();
}