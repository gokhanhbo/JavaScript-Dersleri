var vizenotu = 80;
var finalnotu = 30;

//işlem:

var ortalama = (vizenotu*0.4) + (finalnotu * 0.6);

document.write("Ortalama Değeri : "+ortalama+"<hr>")


if(ortalama >= 70 && ortalama <= 90 ){
    document.write(ortalama+" notu ile B notu aldınız.")
} else if(ortalama >= 90 && ortalama <= 100 ){
    document.write(ortalama+" notu ile A notu aldınız.")
} else if(ortalama >= 50){
    document.write(ortalama+" notu ile sınıfı geçtiniz.")
}
else {
    document.write(ortalama+" notu ile sınıfta kaldınız.")
}

document.write("<hr>")