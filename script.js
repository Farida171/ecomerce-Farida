const mainimg=document.getElementById('mainimg')
 const inc=document.getElementById('inc&dec')
 const cart=document.getElementById('cart')
//  ////////////////////
function changeimg(img){
    mainimg.src=img
}
////////////////////
function increment(){
    inc.innerText=parseFloat(inc.innerText)+1
    cart.innerText=inc.innerText
}
function decrement() {
    if(parseFloat(inc.innerText)>0){
        inc.innerText=parseFloat(inc.innerText)-1
    }
    cart.innerText=inc.innerText
}