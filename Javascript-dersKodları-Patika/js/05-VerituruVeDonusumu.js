/******** Veri turunu ogrenmek ve Veri turu donusumleri ** */

// Veri turunu ogrenmek typeOf:
let price = 111 
let stringPrice = "111"
let hasPassword = true 

console.log("price: ",typeof(price))
console.log("StringPrice : ", typeof(stringPrice))
console.log("hasPassword: ",typeof(hasPassword))

//Stringi sayıya döndürme
let number1= "11"
number1 = parseInt(number1)
console.log("Number1: ",number1,typeof(number1))

let number2 = "15px"
var number3 = "px11px" //hata veririr
number2 = parseInt(number2)
console.log("Number2: ",number1,typeof(number1))

 number3 = "11.1" 
number3 = Number(number3)
console.log("Number3: ",number3,typeof(number3))

let number4 = "11.15" 
number4 = parseFloat(number4)
console.log("Number4: ",number4,typeof(number4))


// number veri tipini string'e döndürme
let number5 = 55 
number5 = number5.toString()
console.log("Number5: ",number3,typeof(number5))

//kontroller
//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false
//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false
// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true

//Explicit Coercion metotlarla dönüşüm

String(123) // “123”
ParseInt("123")  //2

//Implicit Coercion  kendi dönüşümü
If(3<5) // true
console.log(""+123) // “123”
//12/”6” // 2

Boolean(2) // explicit
var a=!!2 //explicit
if (2) { } // implicit due to logical context
!!2 // implicit due to logical operator
2 || 'hello' // implicit due to logical operator