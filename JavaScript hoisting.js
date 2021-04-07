console.clear();
//....//

console.log(a);
b();

var a = 'I\'m a.' // All variables in JavaScript initially set to 'undefined'.
// var a;
// var a = undefined;
function b (){  
  // Functions are settint in memory in js engine entirety.
  console.log('I\'m b.');
}


//...//
//
//After execution context is created.
//
//In first phase, creation phase.
//  It's going to set up the memory space for the functions and the variables that it sees (and of course global object, 'this', outer environment(reference or link).).
//  All variables has a placeholder called 'undefined'
//  This stage is call hoisting for the functions and the variables.
//
//In secend phase, execution phase.
//  That are going to be used when it starts executing the code line by line.
//
//...//
