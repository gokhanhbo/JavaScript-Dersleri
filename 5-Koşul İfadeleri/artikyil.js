/* 

400'ün katı olan yıllar artık artık yıllardır.
Bunun dışında 4'ün katı olan yıllar içerisinde yalnız 100'ün katı olmayan yıllar artık yıllardır.

2004, 1996, 1992 artık yıllardır.
*/

var yil = prompt("Yılı giriniz : ");

if((yil %400 == 0) || ((yil%4 == 0) && (yil %100 !== 0))){
    document.write(yil+" Yılı bir artık yıldır.")
} else {
    document.write(yil+" Yılı bir artık yıl değildir.")
}



