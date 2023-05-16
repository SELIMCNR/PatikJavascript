//Dom belgenin dokumanın tum kontrollerini sağlar.

//Dokuman üzerinde işlemler
console.log(document.URL)
console.log(document.location)
console.log(document.location.hostname)
console.log(document.location.pathname)
console.log(document.body)
console.log(document.head)

document.body.style.backgroundColor="aqua"
document.getElementById('color').style.color="blue"

//DOM içerisinden Etiket ve ID ile Öğe Seçimi
// let h2 = document.getElementsByTagName('h2') etikete göre seçim h2 
let title = document.getElementById('title')
title.innerHTML="Degisen bilgi"
console.log(title.innerHTML)

//Tek seçim 
let link = document.querySelector("ul#list>li>a")
link.innerHTML +="Link bilgisi değişti"
link.style.color="red"
link.classList.add("btn") // btn isimli class eklendi
console.log(link)

let link1 = document.querySelector("#paragrafid")
link1.innerHTML += "Bilgi değişti"
link1.style.color="yellow"
console.log(link1)