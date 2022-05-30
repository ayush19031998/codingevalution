// On clicking remove button the item should be removed from DOM as well as localstorage.
let cofeedata=JSON.parse(localStorage.getItem("coffee")) || [];


cofeedata.map(function (el){
    let div=document.getElementById("bucket")

    let image = document.createElement("img")
    image.setAttribute=("class","cofee")
    image.src=el.image
    
    let h3 =document.createElement("h3")
    h3.innerText=el.title
    
    let price= document.createElement("p")
    price.innerText=el.price
    
    let btn=document.createElement("button")
    btn.setAttribute("id","remove_coffee")
    
    btn.innerText="remove"
    btn.addEventListener("click", function(){
    cofeefunction(elindex)


})
bucket.append(image,h3,price,btn)


})
function cofeefunction(el,index){
    cofeedata.splice(index,1)
    window.location.reload()
}