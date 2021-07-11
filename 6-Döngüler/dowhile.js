/*

do {
    //yapılacak işleri tanımlıyoruz.
}while(şart)

örnek: 1'den 10'a kadar olan sayıların toplamını bulalım.

while döngüsünde önce koşula bakılıp sonra işlem yapılır.
do-while döngüsünde önce işlem yapılır sonra koşula bakılır.

*/
var toplam = 0;
var i = 0;

do{
    toplam += i;
    i++;
}while(i<=10)


document.write("Do-While döngüsünde 1'den 10'a kadar olan sayıların toplamı : "+toplam+"<hr>")