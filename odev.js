/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message.call(person);
messageFunc();


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map((number, numberIndex)=>{
        const result = number * this.numbers[1];
        console.log(result)
    })
  }
};

numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
// REGEX
function isValidNameReg(name){

 if(/\d|\W[^\s]| |[0-9]/.test(name)) {
       return false;
        
} 
  else{
  return true;
}
}

//
function isValidName(name){
    if((typeof name==='string')||(name instanceof String)){
    var a=name;
    var atrim=a.trim();
    var atrimSpace=atrim.split(" ");
    
    atrimSpace.forEach((item)=>{
     if(item.length===1){
       return false
     }              
      return true;               });
    }else{
      return false;
    }
    }
    console.log(isValidName("Fra nk") === false);
    console.log(isValidName("Frank") === true);
    console.log(isValidName(false) === false);
    console.log(isValidName(null) === false);
    console.log(isValidName(undefined) === false);
    console.log(isValidName("") === false);
    console.log(isValidName("  \t\n") === false);
    console.log(isValidName("X") === false);
}

/*  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
function katilimSaati(dersSayisi, dersSuresi){
   var sayi1=String(dersSayisi);
  var sure2=String(dersSuresi);
  var sayi=Number(sayi1);
  var sure=Number(sure2);
try{  
  if((isNaN(sayi)) || ( isNaN(sure) ) ) throw "Geçersiz giriş";
  var ders= parseInt(sayi)*parseInt(sure);
  return ders;
   }
  catch(err){
    //return false;//doğruluk tablosu için
    console.log(err); // error verdirmek için
  }

}

