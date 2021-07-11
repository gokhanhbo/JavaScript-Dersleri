/*
    while(şart){
        //şart gerçekleşene kadar çalışacak kodları yazıyoruz.
    }

    Örnek: 1'den 10'a kadar sayıların toplamını bulalım
*/

var i = 0;
var toplam = 0;

while(i <= 10){
    toplam +=i; //toplam = toplam + i
    console.log(toplam);
    i++; // i'nin değerini her döngüde 1 arttır.
    console.log("i'nin değeri:"+i);
}

document.write("while döngüsünde 1'den 10'a kadar olan sayıların toplamı : "+toplam+"<hr>")