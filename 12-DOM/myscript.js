//id ile erişim

document.getElementById("change").onclick = function(){
    var ust = document.getElementById("content1").innerHTML;
    var alt = document.getElementById("content2").innerHTML;

    document.getElementById("content1").innerHTML = alt;
    document.getElementById("content2").innerHTML = ust;
}