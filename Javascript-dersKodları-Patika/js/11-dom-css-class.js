let greeting = document.querySelector("#greeting")
console.log(greeting.classList) //class varmı etikette

greeting.classList.add("text-primary") //class ekleme
greeting.classList.add("new-info","second-class","third-class") //class ekleme

greeting.classList.remove("new-info")//eklenen classı silme

greeting.classList.remove("new-info","second-class")//eklenen classı silme çoklu
console.log(greeting.classList)