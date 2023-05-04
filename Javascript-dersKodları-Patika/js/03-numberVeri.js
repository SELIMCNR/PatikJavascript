//Number veri tanımlama
let price = 100 ;
let tax = 0.18;
let priceTax = price *tax;
let total = price + priceTax;
console.log("Fiyat : ",price , "Kdv Orani",tax , "Kdv tutarı ",priceTax,
"Fiyat",total);

//Artırma ve Azaltma işlemleri
let counter = 0 ;
counter = counter + 1;
counter+=1;
counter++ ;
console.log("Artırma",counter);

counter --;
counter -=1;
console.log("Azaltma",counter);

counter *=10;
console.log("Carpma",counter);

counter /=10;
console.log("Bolme",counter);

//Islem oncelliği
console.log(2+3*10);
console.log((2+3)*10)

//Mod(kalan) alma -> % 
//Sayi tek mi cift mi 
console.log(3%2); //tek kalan 1
console.log(14%2); //cift kalan 0

//8 urun alan koliye tum urunler sıgıyormu
console.log("Koli ornegi",8%8);
console.log("Koli kalan urun ",18%8);

//us alma **;
console.log(2*2*2*2); //16
console.log(2**4); //16

//asagi yuvarlama islemi -> Math.floor
console.log("Asagi yuvarlama",Math.floor(1.9));

//yukari yuvarlama islemi -> Math.ceil 
console.log("Yukari yuvarlma",Math.ceil(1.1));

//Yakina yuvarlama islemi -> Math.round 
console.log("Yakina yuvarlama",Math.round(1.5));

//String number arası geçiş Number Constructor ile 
let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber);
console.log("Number constructor icine bilgi gonderildi : ",Number("111"));






