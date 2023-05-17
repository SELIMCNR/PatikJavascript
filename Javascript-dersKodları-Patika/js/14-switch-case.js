/*******Çoklu koşullarla çalışmak  */
let userName = prompt("Kullanici adiniz : ")
let age = prompt("Yasiniz: ")
let info = document.querySelector("#info")


if(userName && age >= 18){
    info.innerHTML= "Ehliyet alabilirsiniz."
}
else if(!userName){
    info.innerHTML="Kullanici adiniz yok ."
}
else if(!(age >=18)){
    info.innerHTML="Yas bilginiz yok veya 18 yasindan kucuksunuz."
}

//Switch-case
switch(ifade) {
    case a:
      // kod bloğu
      break;
    case b:
      // kod bloğu
      break;
    default:
      // kod bloğu
  }


  let hava = "Gunesli";
switch(hava) {
  case "Yagmurlu":
      console.log("Semsiyeni yanina almayi unutma");
      break;
  case "Gunesli":
      console.log("Hafif giyin");
  case "Bulutlu":
      console.log("Disari cik");
      break;
  case "Karlı":
      console.log("Kalin giyin");
      break;
  case "Firtinali":
      console.log("Bir süre disari cikma");
      break;
  default:
      console.log("Bilinmeyen hava durumu:" , hava);
}

let islem = function(a, b, operator) {
    switch(operator) {
        case 'topla':
            return a + b;
        break;
        case 'cikar':
            return a - b;
        break;
        case 'carp':
            return a * b;
        break;
        case 'bol':
            return a / b;
        break;
        default:
            return 'Tanimlanmamis islem';
        break;
    }
};
console.log(islem(23, 14, 'topla'));  // 37
console.log(islem(10, 3, 'mod'));     // Tanimlanmamis islem
console.log(islem(23, 3, 'cikar'));
console.log(islem(23,7 , 'carp'));
console.log(islem(24, 4, 'bol'));   

