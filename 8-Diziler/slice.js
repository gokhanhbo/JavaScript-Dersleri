//slice() => dizinin belli bir aralığını almak için kullanılır. (dilimle)

var harfler = ["A","B","C","D","E","F"]

var test1 = harfler.slice(1,3) //B ve C'yi getirecek. başı dahil sonu değil...
var test2 = harfler.slice(2,5) //C,D,E

var test3 = harfler.slice(-3) // tersten son 3 tanesi => D,E,F

document.write(test1+"<br>"+test2+"<br>"+test3+"<br>");

//indexof() =>
document.write("<hr>")