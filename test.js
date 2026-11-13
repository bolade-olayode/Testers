var x = "block";
console.log(x);

var globalVar= "This is a Global variable";
function myFunction() {
    // console.log(globalVar); //accssible becaus e it is a global variable (can be called inside or outside a function)
}


function myFunction1() {
    var localVar= "This is a Local Variable";
    console.log(localVar); // accesible (can only be called inside a function)
}

//  console.log(localVar); //this would throw an error because localVar is not accessible outside the function 
 console.log(globalVar); //this would work because globalVar is accessible outside the function 

 if (true) { 
  let blockVar= "this is a block varable"
  console.log(blockVar); //this would work because blockVar is accessible inside the block
  }

//   console.log(bloackVar); //this would throw an error because blockVar is not accessible outside the block 