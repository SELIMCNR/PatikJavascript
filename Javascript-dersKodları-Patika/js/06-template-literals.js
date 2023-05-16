let username = "Selim"
const domain = "www.bla.org"

let email = username + "@" + domain

console.log("Merhaba",username,"Sitemize hoşgeldin","mail adresin",email)

//Literals için `` bu tırnak işaretleri yapılmalı alt tuşuna basarak.
let info = `Merhaba ${username} sitemize hoşgeldin. mail adresin : ${email}
kısa isminiz: ${username[0]}
mail adresinin uzunlugu : ${email.length} 
borcunuz: ${(2+3)*10} TL
gunun saat bilgisi : ${new Date().getHours()}`


console.log(info)

//Değişkenlerimizi tanımlayalım
const ad =`Aycan`
const soyad =`Yerdelen`
const gozRengi =`Kahverengi`
const yas =21

const kisi = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
<p>${yas}</>
`;


const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }
  const bookTable = `
        <table border>
    <tbody>
      <tr>
        <td> ${Kitap}</td>
        <td>${kitap.ad}</td>
      </tr>
    <tr>
        <td>${Yazar}</td>
        <td>${kitap.yazar}</td>
      </tr>
        <tr>
        <td>${Tarih}</td>
        <td>${kitap.tarih}</td>
      </tr>
    </tbody>
  </table> `
  
