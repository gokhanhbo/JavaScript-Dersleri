//id ile erişim

document.getElementById("change").onclick = function(){
    var ust = document.getElementById("content1").innerHTML;
    var alt = document.getElementById("content2").innerHTML;

    document.getElementById("content1").innerHTML = alt;
    document.getElementById("content2").innerHTML = ust;
}

//Class ile erişim:

document.getElementById("paragraf").onclick = function(){
    document.getElementsByClassName("text1")[0].innerHTML = "Burası ilk paragraf";
    document.getElementsByClassName("text2")[0].innerHTML = "Burası ikinci paragraf";
}

//Etiket erişimi ile değişim:

document.getElementById("baslik").onclick = function() {
    document.getElementsByTagName("h1")[0].innerHTML = "Burası üst başlık";
    document.getElementsByTagName("h2")[0].innerHTML = "Burası alt baslik";
}

//CSS özelliklerini değiştirme => style.property kullanılır.

document.getElementById("cssdegistir").onclick = function() {
    document.getElementById("content1").style.color = "blue";
    document.getElementById("content2").style.backgroundColor = "yellow";
}