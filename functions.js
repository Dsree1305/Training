//! without parameters and arguments

// function demo() {   //? function declaration
//   console.log("HIIIIIIIIIIIIII iam functionnnn");
// }
// demo(); //? function calling

//! with parameters and arguments

// function addition(a, b) {
//     console.log(a + b);
//   }
//   addition(5, 7); //? function calling with arguments
//   addition(10, 11); //? functions are reusable

// let b = function(){
//     console.log("anoymnous")
// };console.log(b);

// function add(callback){
//     return callback(5,3);
// };
// let x = add (fuction(a,b){return a+b});
// console.log(x);

let users = ["Navya","Vishnu","keshav","shiva","sai"]
// let x = users.map((user)=>{
//   return user;

// });
// console.log(x);
// let x = users.forEach((user)=>{
//   return (user);
// });
// console.log(x);
// var a = 10;
// let b = 30;
// function x(){
//   var user = "josh";
//   let company = "Google";
//   const sal = 1234567;
//   console.log(user);
//   console.log(company);
//   console.log(sal);
//   console.log(a,b);

// }
// x();

function x(){
  var a = 10;
  let b = 20;
  console.log(a,b);
  function y(){
    let p = "Js";
    let q = "React";
    console.log(p,q);
    function z(){
      const username = "abc";
      console.log(username);
      console.log(a);
      console.log(q);
    }
    z();
  }
  y();
}
x();

