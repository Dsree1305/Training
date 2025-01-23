// console.log(10);
// console.log(20);
// console.log(30);
// setTimeout(()=>{
//     console.log(80);
// },5000)
// console.log(40);
// console.log(50);
// console.log(60);
// setInterval(()=>{
//     document.writeln("mru");
// },50)



// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve,reject)=>{
//     resolve("success");
// });
// console.log(p2);
// p2.then((response)=>
// {
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>console.log("finally printing for both"))

// let p3 = new Promise((resolve,reject)=>{
//     reject("failures");
// });
// console.log(p3);/

//api fetching
//console.log(window);

// function fetchUsers()
// {
//     let x = fetch("https://jsonplaceholder.typicode.com/users");
//     //console.log(x);
//     x
//     .then((response)=>{
//         //console.log(response)
//         //console.log(response.json());
//         return response.json().then(data=>{
//             console.log(data);
//             let  store = document.getElementById("store");
//             //console.log(store);
//             data.map((user)=>{
//                 // console.log(user);
//                 store.innerHTML += `
//                 <tr>
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
//                 <td>${user.company.name}</td>
//                 </tr>
//                 `
//             })
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers();

// let p = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("Promise successfully completing");
//     } , 3000)
// })

// async function demo()
// {
//     console.log("Start");
//     let x =await p;
//     console.log(x);

//     console.log("End");
// }
// demo();

// async function fetchUsers(){
//     let response =await fetch("https://api.github.com/users");
//     let data =await response.json();
//     console.log(data);
// }
// fetchUsers();


console.log(window);
console.log(document);