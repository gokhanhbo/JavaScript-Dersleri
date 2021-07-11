/*

for(başlangıç değeri, koşul, yinelenme değeri){
    //yapılacak işler;
}

Örnek: 1'den 10'a kadar olan sayıların toplamını bulalım.

*/

var toplam = 0;

for(var i=0; i<=10; i++){
    toplam += i;
}

document.write("for döngüsünde 1'den 10'a kadar olan sayıların toplamı :"+toplam+"<br>")