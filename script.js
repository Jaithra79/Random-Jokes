let url = "https://official-joke-api.appspot.com/random_joke";
let p = document.querySelector("p");
let h = document.querySelector("h2");
let btn = document.querySelector("btn");


let Gbtn = document.getElementById("btn");
function generateClick(){
    window.location.reload();
}
Gbtn.addEventListener("click",generateClick);

let jai = async function(){
  let response = await fetch(url);
  let data = await response.json()
  console.log(data);
  let punchline = data.punchline;
  console.log(punchline);
  let setup = data.setup;
  console.log=(setup);
  p.innerText = punchline;
  h.innerText = setup;

};

jai();
