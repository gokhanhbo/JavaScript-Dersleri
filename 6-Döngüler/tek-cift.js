/*

Örnek 1'den 100'e kadar olan sayıların tek ve çift olduğu durumları bulacağız.

*/

for (var sayi=0; sayi<=100; sayi++){
    if(sayi %2 == 0){
        document.write(sayi+" rakamı çift sayıdır."+"<br>")
    } else {
        document.write(sayi+" rakamı tek sayıdır."+"<br>")
    }
}