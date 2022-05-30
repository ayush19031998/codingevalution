// Add the coffee to local storage with key "coffee"
//https://masai-mock-api.herokuapp.com/coffee/menu
const url = "https://masai-mock-api.herokuapp.com/coffee/menu";


async function getdata(){
let res = await fetch(url)
let product= await res.json()
append(product.menu.data)
}
getdata()

function append(data){
data.forEach(function(el){
let div=document.getElementById("menu")

let image = document.createElement("img")
image.setAttribute=("class","cofee")
image.src=el.image

let h3 =document.createElement("h3")
h3.innerText=el.title

let price= document.createElement("p")
price.innerText=el.price

let btn=document.createElement("button")

btn.innerText="add to bucket"
btn.addEventListener("click", function(){
cofeefunction(el)

})

menu.append(image,h3,price,btn)

})





}
function cofeefunction(el){
console.log(el)
localStorage.setItem("coffee",JSON.stringify(data));
}