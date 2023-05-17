/***********Operations Operatörler**** */

let price = "100"
let user = "Selim"

// == Eşitse değeri
console.log("==",price == 1)
console.log("==",price == 100) 

// === Eşitse değeri ve türü 
console.log("===",price ===1)
console.log("===",price ===100)

// != Eşit değilse değeri
console.log(user != "guest")

// < küçükse 
console.log("price <100",price <100)

// <= küçük veya eşitse
console.log("price <= 100",price <= 100)

// > Büyükse
console.log("price > 100",price > 100) 

//>= Büyük veya eşitse 
console.log("price >= 100",price >= 100)

// && ve 
price = 0
console.log(price <0 && user != "guest")

// || veya 
console.log(price <0 || user != "guest")

// ! değil (tersi)
user="guest"
price = 0
console.log(price >0 && !user != "guest")

