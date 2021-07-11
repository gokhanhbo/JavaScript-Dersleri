//kullanıcıdan değer almak için => prompt() komutu kullanılır.

var number1 = prompt("Birinci sayıyı giriniz : ");
var number2 = prompt("İkinci sayıyı giriniz : ");

document.write("Birinci sayının değeri : "+number1+"<br>");
document.write("İkinci sayının değeri : "+number2+"<br>");

var temp = "";

temp = number1;
number1= number2;
number2 = temp;

document.write("Birinci sayının değeri : "+number1+"<br>");
document.write("İkinci sayının değeri : "+number2+"<br>")