/**********String veri işlemleri */

let email = "btk@gmail.com"
let firstName = "Selim"
let lastName = "Çınar"

//Karakter sayısı -> length 
console.log(email.length)

//ilk karakteri bulmak -> [0]
console.log(firstName[0])
console.log(firstName.charAt(0))

//buyuk harf / kucuk harf : 
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

//String icinde istenen bilgiyi bulma -> search
console.log(email.search("@")) //varsa indisi verir 
console.log(email.search("olmayan varsa -1")) 

//belli bir yere kadar al - > slice: 
let domain = email.slice(email.search("@")+1)
console.log(domain)
console.log(domain.slice(0,domain.indexOf('-')))

//bilgiyi değistir -> replace : 
email=email.replace('gmail.com','sourc.dev')
console.log(email)

//istediğin bilgi var mı ? -> includes
email.includes("4rgrg") //false
email.includes("@") // true

// istediğin bilgi ile basladi mi ? bitti mi -> startsWidth,endsWidth
console.log(email.startsWith("source.org"))

console.log(email.endsWith("source.org"))

//ilk harfleri buyuk yapmak
firstName="figrmkjgvm"
lastName="mfjrnfjen"
let fullName = `${firstName[0].toUpperCase()} ${firstName.slice(1).toLowerCase} ${lastName[0].toUpperCase()} ${lastName.slice(1).toLowerCase}`
console.log(fullName)
console.log(firstName.slice(5,10))
console.log(firstName.concat(" ",lastName))