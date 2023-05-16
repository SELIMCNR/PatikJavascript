let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "Son oge değisti"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge değisti"

let ulDom= document.querySelector("ul#list")
let liDom = document.createElement('li')


liDom.innerHTML="Kendi olusturduğumuz oğe"
ulDom.prepend(liDom)


//button ile liste ekle
var liste = document.querySelector("ul");
var urun = document.querySelector("#veri"); 
var ekle = document.querySelector("#ekle");

ekle.addEventListener("click",function(){
    // createElement ile yeni bir listItem (li) oluşturuyoruz
    var li=document.createElement("li"); 
    
    // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
    li.textContent=veri.value; 
    
    // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
    liste.appendChild(li);
                
    // Veri inputu içerisindeki metni siliyoruz.
    veri.value = "";
  });