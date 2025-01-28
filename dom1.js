// let mainEle = document.createElement("div");
// mainEle.setAttribute("class","mainBlock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// mainEle.setAttribute("class","topBlock");
// // console.log(topEle);

// let image = document.createElement("img");
// image.src="https://media.istockphoto.com/id/478627080/photo/evening-view-of-ama-dablam.jpg?s=612x612&w=0&k=20&c=GLKvtQt1JVoOB4yR2WI86_fYOmG8WObeZP_QV_gFG_0="
// image.width="300"
// image.height="300"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class","bottomBlock");
// // console.log(bottomEle);
// let h1=document.createElement("h1");
// h1.innerText="Heading";

// let btn=document.createElement("button");
// btn.innerText="View More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// bottomEle.appendChild(image);
// bottomEle.appendChild(topEle);
// bottomEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

let form=document.querySelector("form");
let username = document.getElementById("uName");

let password = document.getElementById("uPass");
let show = document.getElementById("show");
let gen = document.getElementsByName("gender");

// console.log(gen);

//!hiding and showing password content
check.addEventListener("submit",event=>{
    // console.log(event);
    // console.log(event.target.checked);
    if(event.target.checked === true){
        password.setAttribute("type" , "text");
        show.innerText = "hide password";

    }else{
        password.setAttribute("type" , "password");
        show.innerText = "show password";

    }
})


form.addEventListener("submit",event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    // console.log(un , up);
    let gender = "";
   
   for(let i=0;i<=gen.length-1;i++){
    if(gen[i].checked == true){
        // console.log("true" , gen[i].value);
        gender += gen[i].value;
    }
   }
//    console.log(ele);
let userDetails={
    un,up,gender
};
console.log(userDetails);
})

