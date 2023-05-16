let fullname = prompt("Adınızı giriniz ","")
console.log(fullname)

let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style = "color:red">${fullname} </small>`

function istek() {
    var kelime=prompt("Bir değer giriniz","lütfen sadece kelime giriniz..")
    document.write(kelime)
  }
  istek()