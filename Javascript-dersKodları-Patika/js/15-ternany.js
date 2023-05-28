/***   Ternany operatörü ile kısa if kullanımı *** */

// Kullanıcı adın varsa yazdır yoksa kullanici bilgin bulunamadi yaz

let userName = prompt("Kullanici Bilginiz Yaziniz")
let info = document.querySelector("#info")

// ternany kullanimi
// kosul ? dogruysa : yanlissa



info.innerHTML = `${userName.length > 0 ? userName:"Kullanici bilginiz bulanamadı :( "}`

var money = 40;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) // "Satın alabilirsin.."