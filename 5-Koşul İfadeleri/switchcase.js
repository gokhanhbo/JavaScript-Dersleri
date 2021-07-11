/*

switch(değer){
    case 1: 
        //yapılacak işler
        break;
    case 2:
        //yapılacak işler
        break;
    default:
        break;
}

*/


var date = new Date();
//Javascript tarih ve zaman bilgisini almak için date nesnesi kullanılır.
document.write("Bugün : "+date.getDay()+"<br>");

//pazar : 0, pazartesi : 1, salı: 2, ... Cumartesi : 6

var deger = date.getDay();

switch(deger){
    case 0:
        day = "Pazar";
        break;
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    default:
        day = "Cumartesi";
        break;
}

document.write("Bugün günlerden "+day+"dır.<br>")

document.write("<hr>")