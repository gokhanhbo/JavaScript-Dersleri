//split() => string ifadeyi array'e çevirir/ayrıştırır.
var text = "JavaScript;dili;öğrenmesi;çok;kolay;bir dildir"

document.write(text+"<br>")

var words =text.split(";");

document.write(words+"<br>")
document.write(words[5]+"<br>")



for(var i=0; i<words.length; i++){
    document.write(words[i]+"<br>")
}



